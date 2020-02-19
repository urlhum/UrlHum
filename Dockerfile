FROM php:alpine

WORKDIR /app
RUN apk add --no-cache composer zlib-dev libpng-dev nodejs npm && docker-php-ext-install mysqli pdo pdo_mysql gd
COPY . ./
RUN composer install
RUN npm install
RUN npm run dev
RUN echo -e '#!/bin/sh\nuntil nc -z mysql 3306; do sleep 1; done\nphp artisan migrate -n --force\nif [ ! -f "/seed-done" ]; then php artisan db:seed -n --force && php artisan settings:set && touch /seed-done; fi\nphp artisan serve --host=0.0.0.0 --port=8000' > entrypoint.sh && chmod +x entrypoint.sh
CMD [ "./entrypoint.sh" ]
