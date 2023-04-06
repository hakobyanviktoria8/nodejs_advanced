const express = require("express");

const app = express();

const friends = [
  {
    id: 0,
    name: "Viki",
  },
  {
    id: 1,
    name: "Alik",
  },
];

app.use((req, res, next) => {
  const startTime = Date.now();
  console.log(`111111111 ${req.method} ${req.url}`);
  // res.send("Hi");
  next();
  const duration = Date.now() - startTime;
  console.log(duration);
});

app.use(express.json());

app.post("/friends", (req, res) => {
  if (!req.body.name) {
    return res.status(400).json({
      error: "Missing name",
    });
  }
  const newFriend = {
    id: friends.length,
    name: req.body.name,
  };
  friends.push(newFriend);
  res.json(newFriend);
});

app.get("/", (req, res) => {
  res.send("Start coding");
});

app.get("/friends", (req, res) => {
  res.json(friends);
});

app.listen(3000, () => {
  console.log("Server run...");
});
