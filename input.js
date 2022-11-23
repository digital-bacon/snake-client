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
  // \u0003 maps to ctrl+c input
  if (key === '\u0003') {
    console.log('Returning you to your boring shell.')
    process.exit();
  };
  if (key === 'w')
    connection.write('Move: up');
  if (key === 'a')
    connection.write('Move: left');
  if (key === 's')
    connection.write('Move: down');
  if (key === 'd')
    connection.write('Move: right');
};

module.exports = { setupInput }