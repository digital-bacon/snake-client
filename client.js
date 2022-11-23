const net = require("net");

// establishes a connection with the game server
const connect = function () {
  const conn = net.createConnection({
    host: '165.227.47.243',
    // host: 'localhost',
    port: '50541',
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