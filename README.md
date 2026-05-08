# 💪 The DiloFitness

A fitness website for a personal trainer brand, built as a **decoupled full-stack application**. The React frontend showcases training and nutrition plans, handles contact form submissions, and allows users to make reservations — all backed by a Laravel REST API.

---

## ✨ Features

### 🖥️ Frontend (React)
- Landing page with hero video, services overview, and trainer bio
- **Training plans** section with detailed programme cards
- **Nutrition plans** section
- **Reservation form** — book a session by name, email, date, time, and number of guests
- **Contact form** — sends an email directly to the gym via the backend
- Cookie consent banner
- Legal pages: Privacy Policy, Cookie Policy, Legal Notice
- Responsive design with Tailwind CSS and custom fonts

### 🔌 Backend (Laravel API)
- REST API for reservations (CRUD)
- Contact form endpoint — validates input and sends an email notification
- CORS middleware configured for cross-origin requests
- Deployed on **Railway** with Nixpacks build

### 🗄️ Database
- `reservations` table: name, email, date, time, guests

---

## 🛠️ Tech Stack

| Layer | Technology |
|---|---|
| Frontend | React 19, React Router 7, Tailwind CSS 4, Axios |
| Icons | Heroicons, React Icons |
| Backend | PHP 8.2+, Laravel 12 |
| Database | MySQL 8 (Docker) / SQLite (local) |
| Containerisation | Docker & Docker Compose |
| Frontend deploy | Vercel |
| Backend deploy | Railway (Nixpacks) |

---

## 📡 API Endpoints

| Method | Endpoint | Description |
|--------|----------|-------------|
| `GET` | `/api/reservations` | List all reservations |
| `POST` | `/api/reservations` | Create a reservation |
| `GET` | `/api/reservations/{id}` | Get a reservation |
| `PUT` | `/api/reservations/{id}` | Update a reservation |
| `DELETE` | `/api/reservations/{id}` | Delete a reservation |
| `POST` | `/api/contacto` | Send contact form email |

**Reservation payload:**
```json
{
  "name": "John Doe",
  "email": "john@example.com",
  "date": "2026-06-15",
  "time": "10:00",
  "guests": 1
}
```

---

## 🚀 Installation

### Prerequisites

- Docker & Docker Compose

### Steps

```bash
# 1. Clone the repository
git clone https://github.com/your-username/the-dilofitness.git
cd the-dilofitness

# 2. Build and start all containers (backend + frontend + MySQL)
docker compose up -d --build
```

Once running:
- **Frontend** → [http://localhost:3000](http://localhost:3000)
- **Backend API** → [http://localhost:8085/api](http://localhost:8085/api)

```bash
# 3. Run migrations (first time only)
docker exec laravel_backend php artisan key:generate
docker exec laravel_backend php artisan migrate
```

---

## ⚙️ Environment Variables

### Backend (`backend/.env`)

```env
APP_NAME=Laravel
APP_URL=http://localhost

# Database — MySQL when using Docker
DB_CONNECTION=mysql
DB_HOST=db
DB_PORT=3306
DB_DATABASE=reservas
DB_USERNAME=user
DB_PASSWORD=password

# Mail — configure to enable contact form emails
MAIL_MAILER=smtp
MAIL_HOST=smtp.example.com
MAIL_PORT=587
MAIL_USERNAME=your@email.com
MAIL_PASSWORD=yourpassword
MAIL_TO_ADDRESS=thedilofitness1@gmail.com
```

### Frontend (`frontend/.env`)

```env
VITE_API_URL=http://localhost:8085
```

For production, set `VITE_API_URL` to your deployed backend URL (e.g. Railway).

---

## 🗂️ Project Structure

```
.
├── docker-compose.yml        # Orchestrates backend + frontend + MySQL
├── backend/                  # Laravel REST API
│   ├── app/
│   │   ├── Http/
│   │   │   ├── Controllers/  # ReservationController, ContactController
│   │   │   └── Middleware/   # CorsMiddleware
│   │   ├── Mail/             # SentForm (contact email)
│   │   └── Models/           # Reservation, User
│   ├── database/
│   │   └── migrations/       # reservations table schema
│   ├── routes/api.php        # All API routes
│   ├── Dockerfile
│   ├── railway.json          # Railway deployment config
│   └── nixpacks.toml         # Railway build config
└── frontend/                 # React SPA
    ├── src/
    │   ├── components/       # Main, Navbar, Header, Footer, Form,
    │   │                     # ReservationForm, Card, BannerCookie...
    │   ├── pages/            # AvisoLegal, Privacidad, Cookies
    │   └── services/api.js   # Axios instance + API calls
    ├── public/               # Assets, fonts, videos
    ├── Dockerfile
    └── vercel.json           # Vercel deployment config
```

---

## 🌍 Deployment

| Service | Platform | Notes |
|---------|----------|-------|
| Backend | [Railway](https://railway.app) | Built with Nixpacks, PHP 8.2 + PDO MySQL |
| Frontend | [Vercel](https://vercel.com) | Set `VITE_API_URL` to the Railway backend URL in Vercel env vars |

---

## 🧪 Tests

```bash
docker exec laravel_backend php artisan test
```

---

## 📄 License

This project is licensed under the [MIT License](LICENSE).
