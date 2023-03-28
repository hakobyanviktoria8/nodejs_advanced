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
    });
    req.pipe(res);
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

// 1. server run
// 2. inside bbrowser console run this code
// 3. open browser http://localhost:2023/posts/ or /id
// fetch("http://localhost:2023/posts",{
//     method:"POST",
//     body:JSON.stringify({id: 4, post:"This is post 4"})
// })
// .then((res)=>res.json())
// .then(post=> console.log(11111111111,post))

server.listen(2023, () => console.log("Server run!"));
