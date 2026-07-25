# KrimeKarta Backend

Node/Express API for the KrimeKarta intelligence dashboard.

## Run locally

```bash
npm install
npm run dev
```

The API listens on `http://localhost:3001`.

Demo credentials:

- Service ID: `KA-P-12345`
- Password: `password`
- OTP: `123456`

## Production notes

- Set `JWT_SECRET` to a long random value before deployment.
- Set `CORS_ORIGIN` to the deployed frontend origin, for example `https://your-app.vercel.app`.
- `backend/data/store.json` is a local JSON datastore for hackathon/demo deployments. Mount it as a volume in Docker if data should persist across restarts.
- The server auto-seeds at least 300 logically distributed Karnataka crime records when the datastore is missing or undersized.
- Health check: `GET /health` returns `status: operational`.

## Main API surface

- `POST /api/v1/auth/login`
- `POST /api/v1/auth/verify-otp`
- `GET /api/v1/auth/me`
- `GET /api/v1/dashboard/overview`
- `GET /api/v1/crimes`
- `GET /api/v1/crimes/:id`
- `POST /api/v1/crimes`
- `PATCH /api/v1/crimes/:id`
- `DELETE /api/v1/crimes/:id`
- `GET /api/v1/districts`
- `GET /api/v1/police-stations`
- `GET /api/v1/gis/overview`
- `GET /api/v1/analytics/summary`
- `GET /api/v1/hotspots/recommendations`
- `GET /api/v1/ai/patrol/recommendations`
- `GET /api/v1/patrol/recommendations`
- `POST /api/v1/ai/patrol/recommendations/:id/:decision`
- `POST /api/v1/ai/patrol/feedback`
- `GET /api/v1/network/graph`
- `GET /api/v1/briefing/:district`
- `GET /api/v1/command-center/status`
- `GET /api/v1/reports/intelligence-brief`
- `GET /api/v1/reports/intelligence-brief/download`
- `GET /api/v1/reports/daily`

Data is persisted in `backend/data/store.json` for local development.

## Verification

```bash
npm test
```
