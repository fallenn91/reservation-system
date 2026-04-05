<?php

return [
    /*
    |--------------------------------------------------------------------------
    | Laravel CORS Configuration
    |--------------------------------------------------------------------------
    |
    | Here you can configure your settings for Cross-Origin Resource Sharing
    | or "CORS". By default, requests from any origin are allowed, but this
    | may need to be adjusted based on your application's needs.
    |
    | You can also enable / disable CORS for certain routes or controllers.
    |
    */

    'paths' => ['api/*'], // Permite CORS solo para las rutas API

    'allowed_methods' => ['*'], // Permite todos los métodos HTTP (GET, POST, PUT, DELETE, etc.)

    'allowed_origins' => [
        'http://localhost:3000', // Dirección de tu frontend en React (ajusta este puerto según el que uses)
        'https://https://system-delta-lyart.vercel.app', // Puedes agregar tu dominio de producción aquí
    ],

    'allowed_origins_patterns' => [],

    'allowed_headers' => ['*'], // Permite todos los encabezados HTTP

    'exposed_headers' => [],

    'max_age' => 0, // Tiempo en segundos que el navegador guarda la respuesta CORS

    'supports_credentials' => false, // Si necesitas enviar cookies o credenciales
];