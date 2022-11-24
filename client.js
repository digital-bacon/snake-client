const net = require("net");
const { 
  IP,
  PORT,
  ENCODING,
  CONNECTION_GREETING,
  PLAYER_NAME
 } = require("./constants");

// establishes a connection with the game server
const connect = function () {
  const conn = net.createConnection({
    host: IP,
    port: PORT,
  });

  // interpret incoming data as text
  conn.setEncoding(ENCODING);

  conn.on("connect", () => {
    console.log(CONNECTION_GREETING);
    conn.write(PLAYER_NAME);
  });

  conn.on('data', (data) => {
    console.log(data.toString());
    conn.end();
  });

  return conn;
};

module.exports = {connect};