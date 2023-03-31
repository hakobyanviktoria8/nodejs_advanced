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

const users = [
  {
    id: 0,
    userName: "Viktorya",
  },
  {
    id: 1,
    userName: "Alexander",
  },
];

app.get("/users", (req, res) => {
  res.json(users);
});

app.get("/users/:userId", (req, res) => {
  const userId = req.params.userId;
  const user = users[userId];
  if (user) {
    res.status(202).json(user);
  } else {
    res.status(404).send("User not exist!");
  }
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
