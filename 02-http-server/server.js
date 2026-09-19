const http = require("http");

// create server using HTTP
const server = http.createServer((req, res) => {
  res.end("hello , server is still running");
});

// run server
server.listen(3000, () => {
  console.log("server running");
});
