const express = require("express");

const app = express();

app.get("/", (req, res) => {
  res.send("Get /");
});

app.get("/posts", (req, res) => {
  res.send("Get /posts");
});

app.get("/comments", (req, res) => {
  res.send("Get comments");
});

app.get("/friends", (req, res) => {
  res.send({
    id: 1,
    name: "Ann",
  });
});
app.post("/posts", (req, res) => {
  res.send({
    id: 1,
    title: "Post 1",
  });
});
app.listen(3000, () => {
  console.log("Express run");
});
