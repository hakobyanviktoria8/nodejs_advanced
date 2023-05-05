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
    id: 2,
    name: "Arev",
  },
];

const server = http.createServer();

server.on("request", (req, res) => {
  const urlLength = req.url.split("/");
  console.log(req.url, urlLength, urlLength.length); //   lh:2023 /frieands

  if (req.method === "POST" && urlLength[1] === "friends") {
    req.on("data", (data) => {
      const friend = data.toString();
      res.writeHead(200, {
        "Content-type": "application/json",
      });
      res.end("Added");
      console.log("POST Request", friend);
      friends.push(JSON.parse(friend));
    });
    req.pipe(res);
  } else if (req.method === "GET" && urlLength[1] === "friends") {
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

server.listen(3000, () => {
  console.log("Server listen 3000 port!");
});
