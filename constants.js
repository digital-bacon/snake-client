const IP = 'localhost';
// const IP = '165.227.47.243';
const PORT= '50541';

const ENCODING = 'utf8';

const EXIT_KEY = '\u0003' // CTRL^C -- used to quit the game

const EXIT_MESSAGE = 'Returning you to your boring shell' // CTRL^C -- used to quit the game

const CONNECTION_GREETING = 'Game started!';

const PLAYER_NAME = 'Name: XXX';

const KEY_BINDINGS = {
  w: 'Move: up',
  a: 'Move: left',
  s: 'Move: down',
  d: 'Move: right',
  h: 'Say: hi!',
  t: 'Say: Delicious ¤¡¤',
  f: 'Say: Feed me ¤¡¤',
  g: 'Say: bye',
}

module.exports = {
  IP,
  PORT,
  ENCODING,
  EXIT_KEY,
  EXIT_MESSAGE,
  CONNECTION_GREETING,
  KEY_BINDINGS,
  PLAYER_NAME
};