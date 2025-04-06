module.exports = {
  async rewrites() {
    return [
      {
        source: '/api/:path*',
        destination: 'https://localhost:7082/api/:path*', // Прокси запросов
      },
    ]
  },
}
