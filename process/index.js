const process = require("node:process");

process.on("beforeExit", () => {
  console.log("Here is process called");
});

process.on("exit", (code) => {
  console.log("Process exit event called: ", code);
});

console.log("This message is displayed first.");
