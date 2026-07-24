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

## Main API surface

- `POST /api/v1/auth/login`
- `POST /api/v1/auth/verify-otp`
- `GET /api/v1/dashboard/overview`
- `GET /api/v1/crimes`
- `POST /api/v1/crimes`
- `GET /api/v1/gis/overview`
- `GET /api/v1/analytics/summary`
- `GET /api/v1/ai/patrol/recommendations`
- `POST /api/v1/ai/patrol/recommendations/:id/:decision`
- `GET /api/v1/network/graph`
- `GET /api/v1/command-center/status`
- `GET /api/v1/reports/intelligence-brief`

Data is persisted in `backend/data/store.json` for local development.
