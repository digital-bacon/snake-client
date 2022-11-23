const keyBindings = require("./keyBindings");

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

const handleUserInput = function(keyPressed) {
  // \u0003 maps to ctrl+c input, used to quit the game
  if (keyPressed === '\u0003') {
    console.log('Returning you to your boring shell.')
    process.exit();
  };
  // Handle all other key presses
  if (keyBindings[keyPressed] === undefined) return
  connection.write(keyBindings[keyPressed]);
};

module.exports = { setupInput }