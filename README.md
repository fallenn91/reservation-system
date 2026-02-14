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


## Configure environment

```bash
php artisan key:generate
php artisan migrate
```

## Create models, migration and Controller

```bash
php artisan make:model Reservation -m
php artisan make:controller ReservationController --api
```
## Create Components for React


