const http = require("http");

const server = http.createServer();

server.on("request", (req, res) => {
  if (req.url === "/posts") {
    res.statusCode = 201;
    res.setHeader("Content-Type", "application/json");
    res.end(
      JSON.stringify({
        id: 1,
        name: "Jon",
      })
    );
  } else if (req.url === "/users") {
    res.statusCode = 202;
    res.setHeader("Content-Type", "text/html");
    res.write("<html>");
    res.write(" <body>");
    res.write("<h1>Hellloooooo</h1>");
    res.write("</body>");
    res.write("</html>");
    res.end();
  } else {
    res.end(`This path is not avalable`);
  }
});

server.listen(2023, () => console.log("Server listen 2023 port"));
