FROM php:8.2-cli
# Instalar dependencias de Laravel + MySQL
RUN apt-get update && apt-get install -y \
    unzip git curl libzip-dev libonig-dev libxml2-dev \
    && docker-php-ext-install pdo_mysql mbstring zip

# Instalar Composer
RUN curl -sS https://getcomposer.org/installer | php -- --install-dir=/usr/local/bin --filename=composer

WORKDIR /var/www

# Copiar código
COPY . .

# Exponer puerto de Laravel
EXPOSE 8000

# Levantar Laravel en modo desarrollo
CMD ["php", "artisan", "serve", "--host=0.0.0.0", "--port=8000"]

