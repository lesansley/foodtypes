import http from "http";

const httpserver = http.createServer((req, res) => {
  res.statusCode = 200;
  res.setHeader("Content-Type", "text/plain");
  res.end("Hello World\n");
});

const PORT = 3000;

const server = () => {
  httpserver.listen(PORT, () => {
    console.log(`Server running at http://localhost:${PORT}/`);
  });
};

export default server;
