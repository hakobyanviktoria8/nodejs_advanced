const http = require("http");

const server = http.createServer((req, res) => {
  res.writeHead(201, {
    "Content-Type": "application/json",
  });
  res.end(
    JSON.stringify({
      id: 1,
      name: "Ann",
    })
  );
});

server.listen(2023, () => {
  console.log("Server running...");
});
