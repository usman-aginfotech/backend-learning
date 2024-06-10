const http = require('http');


const hostname = '127.0.0.1';
const port = 3000;

// Creating the server
const server = http.createServer((req, res) => {
  res.statusCode = 200; // HTTP status code: OK
  res.setHeader('Content-Type', 'text/plain'); // Response type
  res.end('Hello, World!\n'); // Response body
});

// Make the server listen to requests
server.listen(port, hostname, () => {
  console.log(`Server running at http://${hostname}:${port}/`);
});
