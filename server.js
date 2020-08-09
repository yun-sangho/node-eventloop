const http = require("http");

const requestListener = function (req, res) {
  const startCallback = Date.now();

  while (Date.now() - startCallback < 500) {}

  res.writeHead(200);
  res.end("Hello, World!");
};

const server = http.createServer(requestListener);
server.listen(8080);
