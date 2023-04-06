const friends = require("./../models/friends.model");
const modelFriend = require("./../models/friends.model");

function getFriends(req, res) {
  res.json(modelFriend);
}

function postFriends(req, res) {
  if (!req.body.name) {
    return res.status(400).json({
      error: "Missing name",
    });
  }
  const newFriend = {
    id: modelFriend.length,
    name: req.body.name,
  };
  modelFriend.push(newFriend);
  res.json(newFriend);
}

function getFriendWithId(req, res) {
  const friendId = req.params.friendId;
  const friend = modelFriend[friendId];
  if (friend) {
    res.status(202).json(friend);
  } else {
    res.status(404).send("Friend not exist!");
  }
}

function putFriendWithId(req, res) {
  const { friendId } = req.params;
  const { name } = req.body;
  const friend = friends.find((friend) => friend.id == friendId);
  friend.name = name;
  return res.status(202).json(friend);
}

module.exports = {
  getFriends,
  postFriends,
  getFriendWithId,
  putFriendWithId,
};
