# VELA Fashion

VELA Fashion is a premium multi-project ecommerce platform for a luxury apparel brand, built as two independent applications:

- Frontend: React + Vite + Tailwind-inspired design system
- Backend: Node.js + Express + MongoDB + JWT auth

## Project structure

- `frontend/` — customer-facing storefront and admin dashboard
- `backend/` — REST API, auth, middleware, models, and services

## Frontend stack

- React 19
- Vite
- React Router
- Framer Motion
- GSAP
- React Three Fiber
- Zustand
- Axios
- React Helmet Async

## Backend stack

- Node.js
- Express
- MongoDB with Mongoose
- JWT authentication
- Helmet, CORS, rate limiting, input sanitization

## Run locally

### Frontend

```bash
cd frontend
npm install
npm run dev
```

### Backend

```bash
cd backend
npm install
cp .env.example .env
npm run dev
```

## Environment

Create `.env` files using the examples in each project. Backend uses MongoDB Atlas and JWT secrets.

## Deployment

- Frontend: Vercel
- Backend: Railway or Render
- Database: MongoDB Atlas

## Notes

This repository demonstrates a premium-fashion storefront with editorial storytelling, product pages, cart, checkout flow, and a separate admin dashboard structure.
