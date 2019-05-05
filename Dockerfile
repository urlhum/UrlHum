FROM php:alpine

WORKDIR /app
RUN apk add --no-cache composer && docker-php-ext-install mysqli pdo pdo_mysql
COPY . ./
RUN composer install
RUN echo -e '#!/bin/sh\nphp artisan migrate -n --force\nif [ ! -f "/seed-done" ]; then php artisan settings:set && php artisan db:seed -n --force && touch /seed-done; fi\nphp artisan serve --host=0.0.0.0 --port=8000' > entrypoint.sh && chmod +x entrypoint.sh
CMD [ "./entrypoint.sh" ]
