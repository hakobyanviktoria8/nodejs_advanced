const express = require("express");
const friendsControllers = require("./../controllers/friends.controller");

const app = express();

app.use((req, res, next) => {
  const startTime = Date.now();
  console.log(`111111111 ${req.method} ${req.url}`);
  // res.send("Hi");
  // next();
  const duration = Date.now() - startTime;
  console.log("duration__", duration);
});

app.use(express.json());

app.post("/friends", friendsControllers.postFriends);

app.get("/", (req, res) => {
  res.send("Start coding");
});

app.get("/friends", friendsControllers.getFriends);

app.get("/friends/:friendId", friendsControllers.getFriendWithId);

app.put("/friends/:friendId", friendsControllers.putFriendWithId);

app.listen(3000, () => {
  console.log("Server run...");
});
