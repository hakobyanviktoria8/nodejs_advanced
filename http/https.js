const https = require("https");

const req = https.request("https://www.google.com", (res) => {
  res.on("data", (chunk) => {
    console.log(chunk.toString());
  });
});

req.end(console.log("req end"));
