const app = require('./app');
const http = require('http');
const port = process.env.PORT || 5000;
const host = '0.0.0.0';
const server = http.createServer(app);

server.listen(port, host, () => {
  console.log(`Server running on port ${host} ${port}`);
});