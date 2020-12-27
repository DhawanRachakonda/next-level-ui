const { createProxyMiddleware } = require('http-proxy-middleware');

module.exports = function (app) {
  app.use(
    ['/api/v1/viva', '/api/v1/auth'],
    createProxyMiddleware({
      target: 'http://localhost:3003',
      changeOrigin: true,
    }),
  );
};
