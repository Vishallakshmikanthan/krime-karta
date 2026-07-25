import assert from 'node:assert/strict';
import { before, after, describe, it } from 'node:test';
import { app } from '../src/server.js';

let server;
let baseUrl;
let token;

function request(path, options = {}) {
  return fetch(`${baseUrl}${path}`, {
    ...options,
    headers: {
      'Content-Type': 'application/json',
      ...(token ? { Authorization: `Bearer ${token}` } : {}),
      ...(options.headers || {})
    }
  });
}

describe('KrimeKarta API', () => {
  before(async () => {
    server = app.listen(0);
    await new Promise((resolve) => server.once('listening', resolve));
    const { port } = server.address();
    baseUrl = `http://127.0.0.1:${port}`;
  });

  after(async () => {
    await new Promise((resolve, reject) => server.close((error) => (error ? reject(error) : resolve())));
  });

  it('reports operational health', async () => {
    const response = await request('/health');
    assert.equal(response.status, 200);
    const payload = await response.json();
    assert.equal(payload.status, 'operational');
  });

  it('authenticates with demo MFA flow', async () => {
    const login = await request('/api/v1/auth/login', {
      method: 'POST',
      body: JSON.stringify({ serviceId: 'KA-P-12345', password: 'password' })
    });
    assert.equal(login.status, 200);
    const loginPayload = await login.json();
    assert.equal(loginPayload.mfaRequired, true);

    const verify = await request('/api/v1/auth/verify-otp', {
      method: 'POST',
      body: JSON.stringify({ serviceId: 'KA-P-12345', mfaToken: loginPayload.mfaToken, otp: '123456' })
    });
    assert.equal(verify.status, 200);
    const session = await verify.json();
    assert.ok(session.accessToken);
    token = session.accessToken;
  });

  it('serves dashboard, records, hotspot, briefing, and report data', async () => {
    const dashboard = await request('/api/v1/dashboard/overview');
    assert.equal(dashboard.status, 200);
    assert.ok((await dashboard.json()).kpis.totalCrimes24h > 0);

    const crimes = await request('/api/v1/crimes?limit=25');
    assert.equal(crimes.status, 200);
    const crimePayload = await crimes.json();
    assert.ok(crimePayload.total >= 300);
    assert.equal(crimePayload.items.length, 25);

    const hotspots = await request('/api/v1/hotspots/recommendations');
    assert.equal(hotspots.status, 200);
    assert.ok((await hotspots.json()).items.length > 0);

    const briefing = await request('/api/v1/briefing/Bengaluru%20Central');
    assert.equal(briefing.status, 200);
    assert.match((await briefing.json()).summary, /Bengaluru Central/);

    const report = await request('/api/v1/reports/daily');
    assert.equal(report.status, 200);
    assert.ok((await report.json()).reportId);
  });
});
