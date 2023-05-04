const http = require("http");

const server = http.createServer((req, res) => {
  // res.writeHead(200, {
  //   "Content-type": "text/plain",
  // });
  // res.end("Done!");

  res.writeHead(201, {
    "Content-type": "application/json",
  });
  res.end(JSON.stringify({ id: 1, name: "Viki" }));
});

server.listen(3000, () => {
  console.log("Listening 3000 port");
});
