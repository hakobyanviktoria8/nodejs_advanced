const { send } = require("./req");
const { read } = require("./res");

const https = (url, data) => {
  console.log("This is a HTTPS module");
  send(url, data);
  return read();
};

https("https://www.google.com/", "hello");

console.log(1111111, require.cache);
