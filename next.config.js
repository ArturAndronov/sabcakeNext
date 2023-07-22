/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
}

module.exports = {
  // Другие настройки проекта...

  images: {
    domains: ['example.com', 'cdn2.specialist.ru'],
    loader: 'imgix', // Замените 'imgix' на любой другой загрузчик, если используете другой
    path: '', // Оставьте пустым, чтобы отключить Image Optimization API во время экспорта
  },
};
module.exports = nextConfig
