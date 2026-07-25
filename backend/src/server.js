import crypto from 'node:crypto';
import fs from 'node:fs/promises';
import path from 'node:path';
import { fileURLToPath } from 'node:url';
import cors from 'cors';
import express from 'express';
import helmet from 'helmet';
import jwt from 'jsonwebtoken';
import morgan from 'morgan';

const __dirname = path.dirname(fileURLToPath(import.meta.url));
const dataDir = path.resolve(__dirname, '..', 'data');
const dataFile = path.join(dataDir, 'store.json');
const PORT = Number(process.env.PORT || 3001);
const JWT_SECRET = process.env.JWT_SECRET || 'krimekarta-local-dev-secret';
const TOKEN_TTL = '8h';
const DEV_OTP = process.env.DEV_OTP || '123456';
const STORE_MIN_CRIMES = Number(process.env.STORE_MIN_CRIMES || 300);
const authAttempts = new Map();

const seed = {
  users: [
    {
      id: 'usr-sp-001',
      serviceId: 'KA-P-12345',
      password: 'password',
      name: 'DCP Ananya Rao',
      rank: 'Deputy Commissioner of Police',
      role: 'SP',
      district: 'Bengaluru Central',
      station: 'Command Center',
      badge: '49201'
    }
  ],
  districts: [
    { id: 'dist-blr-central', name: 'Bengaluru Central', activeUnits: 24, status: 'critical' },
    { id: 'dist-mysuru', name: 'Mysuru City', activeUnits: 12, status: 'elevated' },
    { id: 'dist-mangaluru', name: 'Mangaluru', activeUnits: 8, status: 'stable' },
    { id: 'dist-hubballi', name: 'Hubballi-Dharwad', activeUnits: 6, status: 'stable' },
    { id: 'dist-belagavi', name: 'Belagavi', activeUnits: 5, status: 'stable' }
  ],
  policeStations: [
    { id: 'ps-upparpet', name: 'Upparpet PS', district: 'Bengaluru Central', lat: 12.9779, lng: 77.5713, unitsAvailable: 8 },
    { id: 'ps-commercial', name: 'Commercial Street PS', district: 'Bengaluru Central', lat: 12.9822, lng: 77.6083, unitsAvailable: 6 },
    { id: 'ps-indiranagar', name: 'Indiranagar PS', district: 'Bengaluru Central', lat: 12.9719, lng: 77.6412, unitsAvailable: 5 },
    { id: 'ps-mysuru-south', name: 'Mysuru South PS', district: 'Mysuru City', lat: 12.2958, lng: 76.6394, unitsAvailable: 7 },
    { id: 'ps-hubballi-central', name: 'Hubballi Central PS', district: 'Hubballi-Dharwad', lat: 15.3647, lng: 75.124, unitsAvailable: 4 }
  ],
  crimes: [
    {
      id: 'cr-24-9012',
      recordId: 'CR-24-9012',
      fir: 'FIR 142/2024',
      date: '2026-07-24',
      time: '01:40',
      priority: 'High',
      category: 'Narcotics (NDPS)',
      title: 'Operation Red Dawn - Intercepted shipment at Border Checkpost B.',
      district: 'Hubballi-Dharwad',
      station: 'Hubballi Central PS',
      status: 'Active Invest.',
      lat: 15.3647,
      lng: 75.124,
      suspects: 2,
      arrests: 1,
      documents: 4,
      summary: "Surveillance team intercepted vehicle KA-01-MJ-4091 based on tip-off. Field test confirms suspected contraband. Link to organized syndicate 'Shadow' suspected based on packaging markers."
    },
    {
      id: 'cr-24-9011',
      recordId: 'CR-24-9011',
      fir: 'FIR 189/2024',
      date: '2026-07-23',
      time: '15:15',
      priority: 'Medium',
      category: 'Cyber Crime',
      title: 'Phishing syndicate targeting state pension portal.',
      district: 'Bengaluru Central',
      station: 'Indiranagar PS',
      status: 'Under Review',
      lat: 12.9719,
      lng: 77.6412,
      suspects: 4,
      arrests: 0,
      documents: 9,
      summary: 'Coordinated credential phishing wave detected against pension beneficiaries. Payment mule accounts mapped to three districts.'
    },
    {
      id: 'cr-24-9008',
      recordId: 'CR-24-9008',
      fir: 'FIR 177/2024',
      date: '2026-07-21',
      time: '03:05',
      priority: 'Low',
      category: 'Financial Fraud',
      title: 'ATM skimming device found at MG Road branch.',
      district: 'Bengaluru Central',
      station: 'Commercial Street PS',
      status: 'Closed/Archived',
      lat: 12.9755,
      lng: 77.6068,
      suspects: 1,
      arrests: 1,
      documents: 5,
      summary: 'Skimming overlay recovered and forwarded to cyber forensics. CCTV led to one arrest.'
    },
    {
      id: 'cr-24-8995',
      recordId: 'CR-24-8995',
      fir: 'FIR 161/2024',
      date: '2026-07-18',
      time: '22:50',
      priority: 'High',
      category: 'Organized Crime',
      title: 'Extortion racket operating in industrial sector phase 2.',
      district: 'Bengaluru Central',
      station: 'Upparpet PS',
      status: 'Active Invest.',
      lat: 12.9836,
      lng: 77.5729,
      suspects: 6,
      arrests: 2,
      documents: 11,
      summary: 'Patterned threats to logistics operators. Financial trail indicates links with known interstate extortion cell.'
    },
    {
      id: 'cr-24-8988',
      recordId: 'CR-24-8988',
      fir: 'FIR 154/2024',
      date: '2026-07-17',
      time: '20:25',
      priority: 'High',
      category: 'Property Crime',
      title: 'Repeat vehicle theft cluster around Majestic transport hub.',
      district: 'Bengaluru Central',
      station: 'Upparpet PS',
      status: 'Active Invest.',
      lat: 12.9767,
      lng: 77.5716,
      suspects: 3,
      arrests: 0,
      documents: 6,
      summary: 'Three thefts within 450 meters over 72 hours. Similar method to prior festival-season incidents.'
    }
  ],
  criminals: [
    { id: 'crm-001', name: 'M. Reddy', aliases: ['Anna', 'RM'], risk: 'High', status: 'Active Warrant', cases: ['FIR 142/2023', 'FIR 089/2024'], district: 'Bengaluru Central' },
    { id: 'crm-002', name: 'Rajesh Kumar', aliases: ['RK'], risk: 'High', status: 'Under Surveillance', cases: ['FIR 142/2023'], district: 'Bengaluru Central' },
    { id: 'crm-003', name: 'Venkatesh S.', aliases: ['Venky'], risk: 'Medium', status: 'On Bail', cases: ['FIR 089/2024'], district: 'Mysuru City' },
    { id: 'crm-004', name: 'Suresh B.', aliases: ['SB'], risk: 'Medium', status: 'Questioned', cases: ['FIR 142/2023'], district: 'Hubballi-Dharwad' }
  ],
  recommendations: [
    {
      id: 'rec-2026-8891',
      priority: 'High',
      action: 'Deploy 2 Mobile Units',
      location: 'Sector 4, Near Majestic Transport Hub',
      station: 'Upparpet PS',
      riskScore: 94,
      confidence: 88,
      requiredOfficers: 4,
      status: 'pending',
      reasoning: 'Spike in reported petty theft incidents over the last 4 hours correlates with historical patterns during major transit periods. CCTV density and recent tip-offs increase confidence.',
      factors: ['Theft reports up 34%', 'Weekend transit surge', 'Two repeat-offender sightings']
    },
    {
      id: 'rec-2026-8892',
      priority: 'Medium',
      action: 'Increase Foot Patrol',
      location: 'Commercial Street Market Area',
      station: 'Commercial Street PS',
      riskScore: 62,
      confidence: 74,
      requiredOfficers: 2,
      status: 'pending',
      reasoning: 'Crowd density is expected to increase after clear weather and salary disbursement windows. Historical data shows moderate nuisance-report lift under these conditions.',
      factors: ['Crowd index rising', 'Recent nuisance reports', 'Weather cleared after rain']
    }
  ],
  patrolUnits: [
    { id: 'unit-alpha-12', callsign: 'ALPHA-12', type: 'Mobile Patrol', district: 'Bengaluru Central', status: 'available', lat: 12.9781, lng: 77.5744 },
    { id: 'unit-bravo-07', callsign: 'BRAVO-07', type: 'Foot Patrol', district: 'Bengaluru Central', status: 'deployed', lat: 12.9822, lng: 77.6083 },
    { id: 'unit-charlie-03', callsign: 'CHARLIE-03', type: 'Interceptor', district: 'Hubballi-Dharwad', status: 'available', lat: 15.3649, lng: 75.1231 }
  ],
  alerts: [
    { id: 'inc-8892', code: 'INC-8892', severity: 'critical', title: 'Suspicious activity reported near Central Bank branch.', createdAt: '2026-07-24T08:58:00.000Z' },
    { id: 'trf-4011', code: 'TRF-4011', severity: 'medium', title: 'Vehicle matching BOLO description flagged on ANPR camera 42.', createdAt: '2026-07-24T08:45:00.000Z' },
    { id: 'ai-2241', code: 'AI-2241', severity: 'medium', title: 'Anomalous crowd movement detected near Commercial Street.', createdAt: '2026-07-24T08:31:00.000Z' }
  ],
  feedback: [
    { id: 'fb-001', officer: 'Sgt. Ramesh K.', note: 'AI recommendation for Sector 4 was accurate. Intercepted two individuals matching the historical profile.', createdAt: '2026-07-24T05:12:00.000Z' },
    { id: 'fb-002', officer: 'Insp. Patil', note: 'Commercial Street prediction was slightly early. Crowds peaked an hour later than anticipated.', createdAt: '2026-07-23T14:15:00.000Z' }
  ],
  auditLogs: []
};

const crimeCategories = ['Property Crime', 'Cyber Crime', 'Narcotics (NDPS)', 'Financial Fraud', 'Organized Crime', 'Public Order', 'Traffic Violation'];
const priorityByCategory = {
  'Narcotics (NDPS)': 'High',
  'Organized Crime': 'High',
  'Cyber Crime': 'Medium',
  'Financial Fraud': 'Medium',
  'Property Crime': 'Medium',
  'Public Order': 'Low',
  'Traffic Violation': 'Low'
};

function deterministicNumber(seedText, min, max) {
  const hash = crypto.createHash('sha256').update(seedText).digest();
  const value = hash.readUInt32BE(0) / 0xffffffff;
  return min + value * (max - min);
}

function generateSyntheticCrimes(data, target = STORE_MIN_CRIMES) {
  if (data.crimes.length >= target) return data.crimes;
  const existing = [...data.crimes];
  const districts = data.districts.map((district) => district.name);
  const stations = data.policeStations;
  const titles = {
    'Property Crime': ['Vehicle theft cluster near transit hub', 'Burglary pattern in commercial lane', 'Chain snatching reported near market'],
    'Cyber Crime': ['UPI mule account network detected', 'Phishing wave targeting public portal', 'SIM swap fraud linked to call center'],
    'Narcotics (NDPS)': ['Contraband handoff flagged near highway checkpost', 'Repeat peddling activity near college corridor', 'Synthetic drug supply chain lead'],
    'Financial Fraud': ['ATM skimming device suspected', 'Loan app extortion complaint cluster', 'Investment scam complaints consolidated'],
    'Organized Crime': ['Extortion threat reported by logistics operator', 'Inter-district syndicate movement flagged', 'Repeat offender congregation alert'],
    'Public Order': ['Crowd-control incident after public event', 'Nuisance reports around nightlife zone', 'Noise and public disorder complaints'],
    'Traffic Violation': ['Hit-and-run investigation under review', 'Reckless driving cluster from ANPR feed', 'Drunk driving checkpoint escalation']
  };

  for (let i = existing.length; i < target; i += 1) {
    const category = crimeCategories[i % crimeCategories.length];
    const district = districts[i % districts.length];
    const station = stations.find((item) => item.district === district) || stations[i % stations.length];
    const date = new Date(Date.UTC(2026, 6, 24));
    date.setUTCDate(date.getUTCDate() - (i % 90));
    const hour = Math.floor(deterministicNumber(`${i}:hour`, 0, 23));
    const minute = Math.floor(deterministicNumber(`${i}:minute`, 0, 59));
    const lat = station.lat + deterministicNumber(`${i}:lat`, -0.035, 0.035);
    const lng = station.lng + deterministicNumber(`${i}:lng`, -0.035, 0.035);
    const priority = priorityByCategory[category] || 'Medium';
    existing.push({
      id: `cr-syn-${String(i + 1).padStart(4, '0')}`,
      recordId: `CR-26-${String(9000 + i + 1).padStart(5, '0')}`,
      fir: `FIR ${100 + (i % 800)}/2026`,
      date: date.toISOString().slice(0, 10),
      time: `${String(hour).padStart(2, '0')}:${String(minute).padStart(2, '0')}`,
      priority,
      category,
      title: titles[category][i % titles[category].length],
      district,
      station: station.name,
      status: i % 8 === 0 ? 'Closed/Archived' : i % 5 === 0 ? 'Under Review' : 'Active Invest.',
      lat: Number(lat.toFixed(6)),
      lng: Number(lng.toFixed(6)),
      suspects: Math.floor(deterministicNumber(`${i}:suspects`, 1, priority === 'High' ? 7 : 4)),
      arrests: Math.floor(deterministicNumber(`${i}:arrests`, 0, 3)),
      documents: Math.floor(deterministicNumber(`${i}:docs`, 2, 13)),
      summary: `${category} report generated from KSP operational seed data for ${district}. Pattern indicators include time-of-day clustering, repeat-location proximity, and jurisdictional workload.`
    });
  }
  return existing;
}

function normalizeStore(data) {
  const normalized = {
    ...seed,
    ...data,
    users: data.users?.length ? data.users : seed.users,
    districts: data.districts?.length ? data.districts : seed.districts,
    policeStations: data.policeStations?.length ? data.policeStations : seed.policeStations,
    crimes: data.crimes?.length ? data.crimes : seed.crimes,
    criminals: data.criminals?.length ? data.criminals : seed.criminals,
    recommendations: data.recommendations?.length ? data.recommendations : seed.recommendations,
    patrolUnits: data.patrolUnits?.length ? data.patrolUnits : seed.patrolUnits,
    alerts: data.alerts?.length ? data.alerts : seed.alerts,
    feedback: data.feedback || [],
    auditLogs: data.auditLogs || []
  };
  normalized.crimes = generateSyntheticCrimes(normalized);
  normalized.crimeCategories = crimeCategories;
  return normalized;
}

async function ensureStore() {
  await fs.mkdir(dataDir, { recursive: true });
  try {
    const raw = await fs.readFile(dataFile, 'utf8');
    const data = normalizeStore(JSON.parse(raw));
    if ((JSON.parse(raw).crimes || []).length !== data.crimes.length) {
      await writeStore(data);
    }
    return data;
  } catch {
    const initial = normalizeStore(structuredClone(seed));
    await fs.writeFile(dataFile, JSON.stringify(initial, null, 2));
    return initial;
  }
}

async function readStore() {
  return ensureStore();
}

async function writeStore(data) {
  await fs.mkdir(dataDir, { recursive: true });
  await fs.writeFile(dataFile, JSON.stringify(data, null, 2));
  return data;
}

function publicUser(user) {
  const { password, ...safeUser } = user;
  return safeUser;
}

function sign(user) {
  return jwt.sign({ sub: user.id, role: user.role, serviceId: user.serviceId }, JWT_SECRET, { expiresIn: TOKEN_TTL });
}

function checkPassword(user, password) {
  if (user.passwordHash) {
    const [salt, expected] = user.passwordHash.split(':');
    const actual = crypto.pbkdf2Sync(String(password), salt, 120000, 32, 'sha256').toString('hex');
    return crypto.timingSafeEqual(Buffer.from(actual), Buffer.from(expected));
  }
  return user.password === password;
}

function authRateLimit(req, res, next) {
  const key = req.ip || 'local';
  const now = Date.now();
  const windowMs = 15 * 60 * 1000;
  const attempts = (authAttempts.get(key) || []).filter((timestamp) => now - timestamp < windowMs);
  if (attempts.length >= 25) {
    return res.status(429).json({ error: { code: 'RATE_LIMITED', message: 'Too many authentication attempts. Try again later.' } });
  }
  attempts.push(now);
  authAttempts.set(key, attempts);
  next();
}

function requireAuth(req, res, next) {
  const header = req.headers.authorization || '';
  const token = header.startsWith('Bearer ') ? header.slice(7) : null;
  if (!token) return res.status(401).json({ error: { code: 'UNAUTHORIZED', message: 'Authentication required.' } });
  try {
    req.auth = jwt.verify(token, JWT_SECRET);
    next();
  } catch {
    res.status(401).json({ error: { code: 'INVALID_TOKEN', message: 'Session expired or invalid.' } });
  }
}

function minutesAgo(isoDate) {
  const diff = Math.max(1, Math.round((Date.now() - new Date(isoDate).getTime()) / 60000));
  if (diff < 60) return `${diff} MINS AGO`;
  if (diff < 1440) return `${Math.round(diff / 60)} HOURS AGO`;
  return `${Math.round(diff / 1440)} DAYS AGO`;
}

function filterCrimes(crimes, query) {
  return crimes.filter((crime) => {
    const haystack = `${crime.recordId} ${crime.fir} ${crime.title} ${crime.category} ${crime.district} ${crime.station} ${crime.status}`.toLowerCase();
    if (query.search && !haystack.includes(String(query.search).toLowerCase())) return false;
    if (query.category && query.category !== 'All Categories' && crime.category !== query.category) return false;
    if (query.station && !['Statewide Search', 'All Stations'].includes(query.station) && crime.station !== query.station) return false;
    if (query.priority && crime.priority !== query.priority) return false;
    if (query.status && crime.status !== query.status) return false;
    if (query.startDate && crime.date < query.startDate) return false;
    if (query.endDate && crime.date > query.endDate) return false;
    return true;
  });
}

function dashboard(data) {
  const todaysCrimes = data.crimes.filter((crime) => crime.date === '2026-07-24');
  const highRecommendations = data.recommendations.filter((item) => item.priority === 'High');
  const activePatrols = data.patrolUnits.filter((unit) => unit.status === 'deployed').length + 86;
  const resolvedCases = data.crimes.filter((crime) => crime.status.includes('Closed')).length + 44;
  const districtSummaries = data.districts.map((district) => ({
    ...district,
    totalIncidents: data.crimes.filter((crime) => crime.district === district.name).length + (district.status === 'critical' ? 40 : district.activeUnits)
  }));

  return {
    kpis: {
      totalCrimes24h: todaysCrimes.length + 141,
      crimeChangePct: 12,
      aiRiskLevel: highRecommendations.length ? 'ELEVATED' : 'NORMAL',
      activePatrols,
      patrolCapacity: 120,
      resolvedCases,
      resolvedChangePct: 5
    },
    trends: [
      { day: 'Mon', count: 87 },
      { day: 'Tue', count: 96 },
      { day: 'Wed', count: 113 },
      { day: 'Thu', count: 91 },
      { day: 'Fri', count: 128 },
      { day: 'Sat', count: 139 },
      { day: 'Sun', count: 122 }
    ],
    hotspots: data.recommendations.map((item) => ({
      id: item.id,
      name: item.location,
      confidence: item.confidence,
      severity: item.priority,
      description: item.reasoning
    })),
    districtSummaries
  };
}

function analytics(data) {
  const total = data.crimes.length || 1;
  const byCategory = Object.entries(data.crimes.reduce((acc, crime) => {
    acc[crime.category] = (acc[crime.category] || 0) + 1;
    return acc;
  }, {})).map(([category, count]) => ({ category, count, pct: Math.round((count / total) * 100) }));

  return {
    trends: [
      { week: 'W1', incidents: 88 },
      { week: 'W2', incidents: 109 },
      { week: 'W3', incidents: 96 },
      { week: 'W4', incidents: 137 },
      { week: 'W5', incidents: 148 }
    ],
    byDistrict: dashboard(data).districtSummaries,
    byCategory,
    executiveSummary: {
      headline: 'Central districts are above baseline, driven by cyber fraud and property-crime clusters.',
      insights: [
        { title: 'Spike in Cyber Fraud', body: 'Reported phishing incidents remain concentrated around IT corridors and pension-service workflows.' },
        { title: 'Property Crime Shift', body: 'Vehicle thefts have migrated from dense commercial streets to transit hubs between 01:00 and 04:00.' }
      ],
      recommendation: 'Increase nocturnal visible patrols in Sector 4 and Commercial Street. Start public awareness messaging for digital fraud.'
    }
  };
}

function geoOverview(data) {
  return {
    stations: data.policeStations,
    crimes: data.crimes.map((crime) => ({
      type: 'Feature',
      geometry: { type: 'Point', coordinates: [crime.lng, crime.lat] },
      properties: {
        id: crime.id,
        recordId: crime.recordId,
        category: crime.category,
        priority: crime.priority,
        status: crime.status,
        title: crime.title
      }
    })),
    hotspots: data.recommendations.map((item, index) => ({
      id: item.id,
      name: item.location,
      riskScore: item.riskScore,
      confidence: item.confidence,
      severity: item.priority,
      lat: index === 0 ? 12.9767 : 12.9822,
      lng: index === 0 ? 77.5716 : 77.6083,
      incidents24h: index === 0 ? 12 : 7,
      recommendation: item.action
    })),
    alerts: data.alerts.map((alert) => ({ ...alert, age: minutesAgo(alert.createdAt) }))
  };
}

function networkGraph(data) {
  return {
    operation: 'Operation Red Sandalwood',
    nodes: data.criminals.map((criminal, index) => ({
      id: criminal.id,
      label: criminal.name,
      risk: criminal.risk,
      status: criminal.status,
      aliases: criminal.aliases,
      x: [52, 36, 63, 29][index] || 50,
      y: [45, 28, 39, 61][index] || 50
    })),
    edges: [
      { source: 'crm-001', target: 'crm-002', type: 'Accomplice', strength: 0.86 },
      { source: 'crm-001', target: 'crm-003', type: 'Financial', strength: 0.72 },
      { source: 'crm-002', target: 'crm-004', type: 'Family', strength: 0.64 },
      { source: 'crm-003', target: 'crm-004', type: 'Communication', strength: 0.58 }
    ],
    selected: data.criminals[0]
  };
}

const app = express();
app.use(helmet());
app.use(cors({ origin: process.env.CORS_ORIGIN || 'http://localhost:5173', credentials: true }));
app.use(express.json({ limit: '1mb' }));
app.use(morgan('dev'));

app.get('/health', (_req, res) => {
  res.json({ status: 'operational', service: 'krimekarta-backend', time: new Date().toISOString() });
});

app.post('/api/v1/auth/login', authRateLimit, async (req, res) => {
  const { serviceId, password } = req.body || {};
  const data = await readStore();
  const user = data.users.find((candidate) => candidate.serviceId.toLowerCase() === String(serviceId || '').toLowerCase());
  if (!user || !checkPassword(user, password)) {
    return res.status(401).json({ error: { code: 'INVALID_CREDENTIALS', message: 'Invalid service ID or password.' } });
  }
  const mfaToken = crypto.randomUUID();
  data.auditLogs.push({ id: crypto.randomUUID(), action: 'AUTH_LOGIN_STEP_UP', userId: user.id, createdAt: new Date().toISOString() });
  await writeStore(data);
  res.json({ mfaRequired: true, mfaToken, otpDelivery: 'registered-device', devOtp: DEV_OTP, user: publicUser(user) });
});

app.post('/api/v1/auth/verify-otp', async (req, res) => {
  const { otp, serviceId } = req.body || {};
  if (String(otp) !== DEV_OTP) {
    return res.status(401).json({ error: { code: 'INVALID_OTP', message: 'Invalid one-time password.' } });
  }
  const data = await readStore();
  const user = data.users.find((candidate) => candidate.serviceId.toLowerCase() === String(serviceId || 'KA-P-12345').toLowerCase()) || data.users[0];
  data.auditLogs.push({ id: crypto.randomUUID(), action: 'AUTH_LOGIN_SUCCESS', userId: user.id, createdAt: new Date().toISOString() });
  await writeStore(data);
  res.json({ accessToken: sign(user), tokenType: 'Bearer', expiresIn: TOKEN_TTL, user: publicUser(user) });
});

app.get('/api/v1/auth/me', requireAuth, async (req, res) => {
  const data = await readStore();
  const user = data.users.find((candidate) => candidate.id === req.auth.sub);
  res.json({ user: user ? publicUser(user) : null });
});

app.get('/api/v1/dashboard/overview', requireAuth, async (_req, res) => {
  res.json(dashboard(await readStore()));
});

app.get('/api/v1/crimes', requireAuth, async (req, res) => {
  const data = await readStore();
  const page = Math.max(1, Number(req.query.page || 1));
  const limit = Math.min(100, Math.max(1, Number(req.query.limit || 25)));
  const rows = filterCrimes(data.crimes, req.query);
  res.json({ items: rows.slice((page - 1) * limit, page * limit), total: rows.length, page, limit });
});

app.get('/api/v1/crimes/:id', requireAuth, async (req, res) => {
  const data = await readStore();
  const item = data.crimes.find((crime) => crime.id === req.params.id || crime.recordId === req.params.id);
  if (!item) return res.status(404).json({ error: { code: 'NOT_FOUND', message: 'Crime record not found.' } });
  res.json(item);
});

app.post('/api/v1/crimes', requireAuth, async (req, res) => {
  const data = await readStore();
  const item = {
    id: crypto.randomUUID(),
    recordId: `CR-${new Date().getFullYear().toString().slice(2)}-${9000 + data.crimes.length + 1}`,
    date: new Date().toISOString().slice(0, 10),
    time: new Date().toISOString().slice(11, 16),
    priority: 'Medium',
    status: 'Under Review',
    suspects: 0,
    arrests: 0,
    documents: 0,
    lat: 12.9716,
    lng: 77.5946,
    ...req.body
  };
  data.crimes.unshift(item);
  data.auditLogs.push({ id: crypto.randomUUID(), action: 'CRIME_CREATED', userId: req.auth.sub, targetId: item.id, createdAt: new Date().toISOString() });
  await writeStore(data);
  res.status(201).json(item);
});

app.patch('/api/v1/crimes/:id', requireAuth, async (req, res) => {
  const data = await readStore();
  const index = data.crimes.findIndex((crime) => crime.id === req.params.id);
  if (index < 0) return res.status(404).json({ error: { code: 'NOT_FOUND', message: 'Crime record not found.' } });
  data.crimes[index] = { ...data.crimes[index], ...req.body, id: data.crimes[index].id };
  await writeStore(data);
  res.json(data.crimes[index]);
});

app.delete('/api/v1/crimes/:id', requireAuth, async (req, res) => {
  const data = await readStore();
  const index = data.crimes.findIndex((crime) => crime.id === req.params.id);
  if (index < 0) return res.status(404).json({ error: { code: 'NOT_FOUND', message: 'Crime record not found.' } });
  const [deleted] = data.crimes.splice(index, 1);
  data.auditLogs.push({ id: crypto.randomUUID(), action: 'CRIME_DELETED', userId: req.auth.sub, targetId: deleted.id, createdAt: new Date().toISOString() });
  await writeStore(data);
  res.status(204).send();
});

app.get('/api/v1/districts', requireAuth, async (_req, res) => {
  const data = await readStore();
  res.json({ items: dashboard(data).districtSummaries, total: data.districts.length });
});

app.get('/api/v1/police-stations', requireAuth, async (req, res) => {
  const data = await readStore();
  const items = req.query.district ? data.policeStations.filter((station) => station.district === req.query.district) : data.policeStations;
  res.json({ items, total: items.length });
});

app.get('/api/v1/criminals', requireAuth, async (_req, res) => {
  const data = await readStore();
  res.json({ items: data.criminals, total: data.criminals.length });
});

app.get('/api/v1/gis/overview', requireAuth, async (_req, res) => {
  res.json(geoOverview(await readStore()));
});

app.get('/api/v1/analytics/summary', requireAuth, async (_req, res) => {
  res.json(analytics(await readStore()));
});

app.get('/api/v1/ai/patrol/recommendations', requireAuth, async (_req, res) => {
  const data = await readStore();
  res.json({ items: data.recommendations, feedback: data.feedback });
});

app.get('/api/v1/hotspots/recommendations', requireAuth, async (_req, res) => {
  const data = await readStore();
  res.json({ items: geoOverview(data).hotspots, generatedAt: new Date().toISOString(), model: 'deterministic-risk-v1' });
});

app.get('/api/v1/patrol/recommendations', requireAuth, async (_req, res) => {
  const data = await readStore();
  res.json({ items: data.recommendations, feedback: data.feedback });
});

app.post('/api/v1/ai/patrol/recommendations/:id/:decision', requireAuth, async (req, res) => {
  const data = await readStore();
  const item = data.recommendations.find((candidate) => candidate.id === req.params.id);
  if (!item) return res.status(404).json({ error: { code: 'NOT_FOUND', message: 'Recommendation not found.' } });
  if (!['approve', 'reject'].includes(req.params.decision)) {
    return res.status(400).json({ error: { code: 'BAD_DECISION', message: 'Decision must be approve or reject.' } });
  }
  item.status = req.params.decision === 'approve' ? 'approved' : 'rejected';
  item.decidedAt = new Date().toISOString();
  data.auditLogs.push({ id: crypto.randomUUID(), action: `PATROL_${item.status.toUpperCase()}`, userId: req.auth.sub, targetId: item.id, createdAt: item.decidedAt });
  await writeStore(data);
  res.json(item);
});

app.post('/api/v1/ai/patrol/feedback', requireAuth, async (req, res) => {
  const data = await readStore();
  const feedback = { id: crypto.randomUUID(), officer: req.body.officer || 'Field Officer', note: req.body.note, createdAt: new Date().toISOString() };
  data.feedback.unshift(feedback);
  await writeStore(data);
  res.status(201).json(feedback);
});

app.get('/api/v1/network/graph', requireAuth, async (_req, res) => {
  res.json(networkGraph(await readStore()));
});

app.get('/api/v1/briefing/:district', requireAuth, async (req, res) => {
  const data = await readStore();
  const district = req.params.district;
  const districtCrimes = data.crimes.filter((crime) => crime.district.toLowerCase() === district.toLowerCase());
  const highPriority = districtCrimes.filter((crime) => crime.priority === 'High').length;
  const topCategories = Object.entries(districtCrimes.reduce((acc, crime) => {
    acc[crime.category] = (acc[crime.category] || 0) + 1;
    return acc;
  }, {})).sort((a, b) => b[1] - a[1]).slice(0, 3);
  res.json({
    title: `${district} Intelligence Brief`,
    generatedAt: new Date().toISOString(),
    district,
    summary: `${district} has ${districtCrimes.length} seeded operational records in the current analysis window, including ${highPriority} high-priority incidents. Dominant categories are ${topCategories.map(([name, count]) => `${name} (${count})`).join(', ') || 'not available'}.`,
    actions: [
      'Prioritize night patrols around repeat-location clusters.',
      'Pair station-level review with cyber and property-crime prevention messaging.',
      'Escalate high-priority repeat-offender records to district intelligence review.'
    ],
    caveat: 'This is decision-support output generated from seeded and operational records; officer judgment remains authoritative.'
  });
});

app.get('/api/v1/command-center/status', requireAuth, async (_req, res) => {
  const data = await readStore();
  res.json({
    systems: [
      { name: 'API Gateway', status: 'operational', latencyMs: 42 },
      { name: 'Crime Records DB', status: 'operational', latencyMs: 28 },
      { name: 'AI Recommendation Engine', status: 'degraded', latencyMs: 171 },
      { name: 'GIS Tile Layer', status: 'operational', latencyMs: 66 }
    ],
    patrolUnits: data.patrolUnits,
    alerts: data.alerts.map((alert) => ({ ...alert, age: minutesAgo(alert.createdAt) })),
    auditLogs: data.auditLogs.slice(-25).reverse()
  });
});

app.get('/api/v1/reports/intelligence-brief', requireAuth, async (_req, res) => {
  const data = await readStore();
  res.json({
    title: 'Daily Intelligence Brief',
    generatedAt: new Date().toISOString(),
    summary: analytics(data).executiveSummary,
    priorityRecommendations: data.recommendations,
    topCrimes: data.crimes.slice(0, 5)
  });
});

app.get('/api/v1/reports/daily', requireAuth, async (_req, res) => {
  const data = await readStore();
  res.json({
    reportId: `RPT-${new Date().toISOString().slice(0, 10)}`,
    generatedAt: new Date().toISOString(),
    dashboard: dashboard(data),
    analytics: analytics(data),
    commandStatus: {
      openAlerts: data.alerts.length,
      deployedUnits: data.patrolUnits.filter((unit) => unit.status === 'deployed').length,
      pendingRecommendations: data.recommendations.filter((item) => item.status === 'pending').length
    }
  });
});

app.get('/api/v1/reports/intelligence-brief/download', requireAuth, async (_req, res) => {
  const data = await readStore();
  const brief = analytics(data).executiveSummary;
  const body = [
    'KrimeKarta Daily Intelligence Brief',
    `Generated: ${new Date().toISOString()}`,
    '',
    brief.headline,
    '',
    ...brief.insights.map((item) => `${item.title}: ${item.body}`),
    '',
    `Recommended deployment: ${brief.recommendation}`
  ].join('\n');
  res.setHeader('Content-Type', 'text/plain; charset=utf-8');
  res.setHeader('Content-Disposition', 'attachment; filename="krimekarta-intelligence-brief.txt"');
  res.send(body);
});

app.use((req, res) => {
  res.status(404).json({ error: { code: 'ROUTE_NOT_FOUND', message: `${req.method} ${req.path} is not available.` } });
});

app.use((err, _req, res, _next) => {
  console.error(err);
  res.status(500).json({ error: { code: 'INTERNAL_ERROR', message: 'Unexpected backend error.' } });
});

if (process.argv[1] === fileURLToPath(import.meta.url)) {
  app.listen(PORT, () => {
    console.log(`KrimeKarta backend listening on http://localhost:${PORT}`);
  });
}

export { app, readStore };
