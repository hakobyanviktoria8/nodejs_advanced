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

  if (req.method === "POST" && paths[1] === "posts") {
    req.on("data", (data) => {
      const postOne = data.toString();
      console.log("Req.on", postOne);
      posts.push(JSON.parse(postOne));
      res.end("Post added!");
    });
  } else if (req.method === "GET" && paths[1] === "posts") {
    res.statusCode = 211;
    res.setHeader("Content-Type", "application/json");
    if (paths.length === 3) {
      const idx = +paths[2];
      res.end(JSON.stringify(posts[idx]));
    } else {
      res.end(JSON.stringify(posts));
    }
  }
});

server.listen(2023, () => console.log("Server run!"));
