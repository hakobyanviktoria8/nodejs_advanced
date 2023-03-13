// const { send } = require("./moduls/req");
// const { read } = require("./moduls/res");
const { send, read } = require("./moduls");

const https = (url, data) => {
  console.log("This is a HTTPS module");
  send(url, data);
  return read();
};

https("https://www.google.com/", "hello");

// console.log(1111111, require.cache);
