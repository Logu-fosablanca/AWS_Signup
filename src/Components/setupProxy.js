// const { createProxyMiddleware } = require('http-proxy-middleware');

// module.exports = function (app) {
//   app.use(
//     'api/',
//     createProxyMiddleware({
//       target: 'https://2e817mx5u5.execute-api.ap-south-1.amazonaws.com',
//       changeOrigin: true,
//       onError: (err, req, res) => {
//         // Handle proxy errors
//         console.error('Proxy Error:', err);
//         res.writeHead(500, {
//           'Content-Type': 'application/json',
//         });
//         res.end('Proxy Error');
//       },
//     })
//   );
// };