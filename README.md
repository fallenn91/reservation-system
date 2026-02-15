# reservation-system

## Structure

Reservation-System/
├── backend/         # Laravel API
│   ├── app/
│   ├── database/
│   ├── routes/
│   └── Dockerfile
├── frontend/        # React SPA
│   ├── src/
│   │   ├── components/
│   │   ├── services/
│   │   └── App.jsx
│   └── Dockerfile
└── docker-compose.yml

## Build and run Dockers

```bash
docker compose up -d --build
```

## Configure environment for Laravel

```bash
php artisan key:generate
php artisan migrate
```

## Configure React and Vite

```bash
npm install
npm run dev
```

## Create models, migration and Controller

```bash
php artisan make:model Reservation -m
php artisan make:controller ReservationController --api
```
## Create Components for React


