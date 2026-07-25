# KrimeKarta

AI-powered crime intelligence and patrol decision support platform for the KSP Datathon.

## Local development

Start the backend:

```bash
cd backend
npm install
npm run dev
```

Start the frontend:

```bash
cd frontend
npm install
npm run dev
```

Open `http://localhost:5173`.

Demo credentials:

- Service ID: `KA-P-12345`
- Password: `password`
- OTP: `123456`

## Docker

```bash
docker compose up --build
```

Frontend: `http://localhost:5173`

Backend health: `http://localhost:3001/health`

## Deploy

- Backend: Render can use `render.yaml`. Set `CORS_ORIGIN` to the Vercel frontend URL.
- Frontend: Vercel can use `frontend/vercel.json`. Set `VITE_API_URL` to `https://your-render-service.onrender.com/api/v1`.

## Verification

```bash
cd backend && npm test
cd frontend && npm run build
```
