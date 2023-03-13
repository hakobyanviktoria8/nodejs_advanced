const { get } = require("http");
// the some way we can use request method

get("http://www.google.com/", (res) => {
  res.on("data", (chunk) => {
    console.log(chunk.toString());
  });
  res.on("end", () => {
    console.log("res on END");
  });
});

