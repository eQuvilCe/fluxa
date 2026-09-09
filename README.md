# Fluxa — Financial infrastructure (concept)

Premium fintech landing experience inspired by modern payment platforms.

**Author:** [@eQuvilCe](https://t.me/eQuvilCe)

## Stack

- React 18 + Vite
- React Router
- CSS (custom design system, dark mode)
- i18n: English / Russian / Uzbek

## Features

- Mega-menu navbar with staggered animations
- Dark / light theme
- Multi-language UI
- Interactive sections (particles, hologram card, aurora, orbit, neon portal, energy core)
- Feature pages per product
- Auth demo with welcome nick
- Mobile-responsive polish
- SPA-ready (`vercel.json`)

## Run locally

```bash
npm install
npm run dev
```

## Build

```bash
npm run build
npm run preview
```

## Deploy (Vercel)

1. Push this folder to GitHub
2. Import the repo in Vercel
3. Framework: **Vite** · Build: `npm run build` · Output: `dist`

Contact links point to [t.me/eQuvilCe](https://t.me/eQuvilCe).

> Demo concept page. Not affiliated with Stripe.


## Backend API

Serverless routes in `/api` (Vercel):

| Method | Path | Description |
|--------|------|-------------|
| GET | `/api/status` | Health / meta |
| POST | `/api/checkout` | Create demo checkout session |
| POST | `/api/contact` | Demo contact ticket |

Local API:

```bash
npm run api
# other terminal
npm run dev
```

On Vercel, `/api/*` works automatically — no extra setup.

## Auth + Database

Local backend uses a **JSON file database** (`server/data/db.json`):

- `POST /api/auth/register` — create user (password hashed with scrypt)
- `POST /api/auth/login` — login, returns JWT-like token
- `GET /api/auth/me` — current user
- Users, checkout sessions, contact tickets are persisted on disk

```bash
# terminal 1
npm run api

# terminal 2
npm run dev
```

Then open `/signup`, register, and use the Live Demo API buttons on the homepage.
