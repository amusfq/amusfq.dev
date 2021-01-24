# Portfolio

Ini adalah website portfolio dan resume yang dibangun menggunakan ReactJS, Laravel dan InertiaJS.

## Instalasi dan konfigurasi

Clone repo ini

```bash
git clone https://github.com/amusfq/portfolio.git
```

Buka folder portfolio hasil clone dan buat file **.env**

```bash
cd portfolio
cp .env.example .env
```

Generate APP_KEY untuk laravel

```bash
php artisan key:generate
```

Edit file **.env**
sesuaikan baris berikut dengan database kalian

```.env
DB_DATABASE=portfolio
DB_USERNAME=root
DB_PASSWORD=
```

Import file **portfolio.sql** ke database kalian.

Install dependency untuk Laravel dan React

```bash
composer install
npm install
```

build React

```bash
npm run prod
```

## Contributing

Pull requests are welcome. For major changes, please open an issue first to discuss what you would like to change.

Please make sure to update tests as appropriate.

## License

[MIT](https://choosealicense.com/licenses/mit/)
