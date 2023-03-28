const http = require("http");
const server = http.createServer();

const posts = [
  {
    id: 0,
    post: "This is post 0",
  },
  {
    id: 1,
    post: "This is post 1",
  },
  {
    id: 2,
    post: "This is post 2",
  },
];

server.on("request", (req, res) => {
  const paths = req.url.split("/");
  console.log(paths);

  if (paths[1] === "posts") {
    res.statusCode = 211;
    res.setHeader("Content-Type", "applicatin/json");
    if (paths.length === 3) {
      const idx = +paths[2];
      res.end(JSON.stringify(posts[idx]));
    } else {
      res.end(JSON.stringify(posts));
    }
  }
});

server.listen(2023, () => console.log("Server run!"));
