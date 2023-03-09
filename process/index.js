const process = require("node:process");

process.on("exit", (code) => {
  console.log("exit event called: ", code);
});

process.on("beforeExit", () => {
  console.log("beforeExit event called");
});

console.log("Console.log called");
