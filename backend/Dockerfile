FROM php:8.2-cli

RUN apt-get update && apt-get install -y zip unzip git curl libonig-dev libxml2-dev \
    && docker-php-ext-install pdo_mysql mbstring bcmath

COPY --from=composer:2 /usr/bin/composer /usr/bin/composer

WORKDIR /var/www

# Comando para crear el proyecto Laravel
CMD ["composer", "create-project", "laravel/laravel", "."]
