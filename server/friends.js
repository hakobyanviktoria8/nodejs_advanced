const http = require("http");

const friends = [
  {
    id: 0,
    name: "Alik",
  },
  {
    id: 1,
    name: "Viki",
  },
  {
    id: 1,
    name: "Arev",
  },
];

const server = http.createServer();

server.on("request", (req, res) => {
  const urlLength = req.url.split("/");
  console.log(req.url, urlLength, urlLength.length); //   lh:2023 /frieands

  if (urlLength[1] === "friends") {
    res.statusCode = 201;
    res.setHeader("Content-type", "application/json");

    if (urlLength.length === 3) {
      const idx = +urlLength[2];
      res.end(JSON.stringify(friends[idx]));
    } else {
      res.end(JSON.stringify(friends));
    }
  } else {
    res.writeHead(200, {
      "Content-type": "application/json",
    });
    res.end("Done");
  }
});

server.listen(2023, () => {
  console.log("Server listen 2023 port!");
});
