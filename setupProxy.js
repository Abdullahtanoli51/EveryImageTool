// setupProxy.js

const { createProxyMiddleware } = require('http-proxy-middleware');

module.exports = function (app) {
  app.use(
    '/api',
    createProxyMiddleware({
      target: 'http://localhost:5173', // Replace with your backend server's address
      changeOrigin: true,
    })
  );
};
