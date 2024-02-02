module.exports = {
  reactStrictMode: true,

  async rewrites() {
    return [
      {
        source: '/api/:path*', // Все запросы, начинающиеся с /api, будут перенаправляться
        destination: 'http://localhost:3001/:path*', // на http://localhost:3001
      },
    ];
  },
};
