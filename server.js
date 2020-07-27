const http = require('http');

const requestListener = function (req, res) {
  const startCallback = Date.now();

  // do something that will take 10ms...
  while (Date.now() - startCallback < 5000) {
    // do nothing
  }

  res.writeHead(200);
  res.end('Hello, World!');
}

const server = http.createServer(requestListener);
server.listen(8080);