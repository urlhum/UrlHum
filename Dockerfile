FROM php:alpine

WORKDIR /app
RUN apk add --no-cache composer zlib-dev libpng-dev && docker-php-ext-install mysqli pdo pdo_mysql gd
COPY . ./
RUN composer install
RUN echo -e '#!/bin/sh\nuntil nc -z mysql 3306; do sleep 1; done\nphp artisan migrate -n --force\nif [ ! -f "/seed-done" ]; then php artisan db:seed -n --force && php artisan settings:set && touch /seed-done; fi\nphp artis$
CMD [ "./entrypoint.sh" ]
