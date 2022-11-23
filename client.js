const net = require("net");

// establishes a connection with the game server
const connect = function () {
  const conn = net.createConnection({
    // host: '165.227.47.243',
    host: 'localhost',
    port: '50541',
  }, () => console.log('Connected to server.'));

  // interpret incoming data as text
  conn.setEncoding("utf8");

  conn.on("connect", () => {
    console.log('Game started!');
    conn.write('Name: XXX');
    const delay = 100;
    let currentTimer = delay;
    // setInterval(() => conn.write('Move: down'), 100);
    // setInterval(() => conn.write('Move: right'), 35);
    // setInterval(() => conn.write('Move: up'), 100);
    // setInterval(() => conn.write('Move: left'), 30);
  });

  conn.on('data', (data) => {
    console.log(data.toString());
    conn.end();
  });

  return conn;
};

module.exports = {connect};