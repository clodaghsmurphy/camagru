FROM php:8.2.5-fpm


RUN apt-get update && apt-get install -y zip unzip libpq-dev libpng-dev libjpeg-dev libfreetype6-dev  libjpeg62-turbo-dev libgd-dev
RUN docker-php-ext-install pdo \
    && docker-php-ext-install pdo_mysql \
    && docker-php-ext-install pdo_pgsql 

EXPOSE 9000

CMD ["php-fpm", "-F"]

