const {
  ENCODING,
  EXIT_KEY,
  EXIT_MESSAGE,
  KEY_BINDINGS
 } = require("./constants");

// Stores the active TCP connection object.
let connection;

// setup interface to handle user input from stdin
const setupInput = function (conn) {
  connection = conn;
  const stdin = process.stdin;
  stdin.setRawMode(true);
  stdin.setEncoding(ENCODING);
  stdin.resume();
  stdin.on("data", handleUserInput);
  return stdin;
};

const handleUserInput = function(keyPressed) {
  // used to quit the game
  if (keyPressed === EXIT_KEY) {
    console.log(EXIT_MESSAGE)
    process.exit();
  };
  // Handle all other key presses
  if (KEY_BINDINGS[keyPressed] === undefined) return
  connection.write(KEY_BINDINGS[keyPressed]);
};

module.exports = { setupInput }