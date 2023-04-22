FROM php:7.4-fpm

# Install additional PHP extensions if needed
RUN docker-php-ext-install mysqli pdo pdo_mysql

# Copy the PHP application files into the container
COPY . /var/www/html/

# Set permissions for the PHP application files
RUN chown -R www-data:www-data /var/www/html

EXPOSE 9000

# Start the PHP-FPM service
CMD ["php-fpm"]
