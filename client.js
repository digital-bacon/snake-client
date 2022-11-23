const net = require("net");
const { IP, PORT } = require("./constants");

// establishes a connection with the game server
const connect = function () {
  const conn = net.createConnection({
    host: IP,
    port: PORT,
  }, () => console.log('Connected to server.'));

  // interpret incoming data as text
  conn.setEncoding("utf8");

  conn.on("connect", () => {
    console.log('Game started!');
    conn.write('Name: XXX');
  });

  conn.on('data', (data) => {
    console.log(data.toString());
    conn.end();
  });

  return conn;
};

module.exports = {connect};