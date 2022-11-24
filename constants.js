const IP = 'localhost';
// const IP = '165.227.47.243';
const PORT= '50541';

const ENCODING = 'utf8';

const EXIT_KEY = '\u0003' // CTRL^C -- used to quit the game

const EXIT_MESSAGE = 'Returning you to your boring shell' // CTRL^C -- used to quit the game

const CONNECTION_GREETING = 'Game started!';

const PLAYER_NAME = 'Name: ~.~';

MOVE_UP = () => SNAKE_ACTIONS.moveUp();
MOVE_LEFT = () => SNAKE_ACTIONS.moveLeft();
MOVE_DOWN = () => SNAKE_ACTIONS.moveDown();
MOVE_RIGHT = () => SNAKE_ACTIONS.moveRight();
PLAYER_SAY_HI = () => MESSAGES.playerHi();
PLAYER_SAY_BYE = () => MESSAGES.playerBye();
PLAYER_SAY_ROLLIN = () => MESSAGES.playerRollin();
PLAYER_SAY_DELICOUS = () => MESSAGES.playerDelicious();
PLAYER_SAY_FEEDME = () => MESSAGES.playerFeedMe();

const SNAKE_ACTIONS = {
  moveUp: function() {return this.move('up')},
  moveLeft: function() {return this.move('left')},
  moveDown: function() {return this.move('down')},
  moveRight: function() {return this.move('right')},
  move: (direction) => 'Move: ' + direction.toLowerCase(),
}

const MESSAGES = {
  playerHi: function() {return this.playerSay('hi!')},
  playerBye: function() {return this.playerSay('Delicious ¤¡¤')},
  playerDelicious: function() {return this.playerSay('Feed me ¤¡¤')},
  playerRollin: function() {return this.playerSay('Rollin rollin rollin')},
  playerFeedMe: function() {return this.playerSay('bye')},
  playerSay: (message) => 'Say: ' + message
}

module.exports = {
  IP,
  PORT,
  ENCODING,
  EXIT_KEY,
  EXIT_MESSAGE,
  CONNECTION_GREETING,
  PLAYER_NAME,
  MESSAGES,
  MOVE_UP,
  MOVE_LEFT,
  MOVE_DOWN,
  MOVE_RIGHT,
  PLAYER_SAY_HI,
  PLAYER_SAY_BYE,
  PLAYER_SAY_DELICOUS,
  PLAYER_SAY_FEEDME,
};