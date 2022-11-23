const keys = require("./keyBindings");

// Stores the active TCP connection object.
let connection;

// setup interface to handle user input from stdin
const setupInput = function (conn) {
  connection = conn;
  const stdin = process.stdin;
  stdin.setRawMode(true);
  stdin.setEncoding("utf8");
  stdin.resume();
  stdin.on("data", handleUserInput);
  return stdin;
};

const handleUserInput = function (key) {
  // \u0003 maps to ctrl+c input, used to quit the game
  if (key === '\u0003') {
    console.log('Returning you to your boring shell.')
    process.exit();
  };
  // Perform an action in the game
  connection.write(keys[key]);
};

module.exports = { setupInput }