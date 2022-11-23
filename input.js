const { KEYBINDINGS } = require("./constants");

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
  if (KEYBINDINGS[keyPressed] === undefined) return
  connection.write(KEYBINDINGS[keyPressed]);
};

module.exports = { setupInput }