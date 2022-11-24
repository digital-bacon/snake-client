const {
  MOVE_UP,
  MOVE_LEFT,
  MOVE_DOWN,
  MOVE_RIGHT,
  PLAYER_SAY_HI,
  PLAYER_SAY_BYE,
  PLAYER_SAY_DELICOUS,
  PLAYER_SAY_FEEDME,
 } = require("./constants");

 const keyBindings = {
  w: MOVE_UP,
  a: MOVE_LEFT,
  s: MOVE_DOWN,
  d: MOVE_RIGHT,
  h: PLAYER_SAY_HI,
  r: PLAYER_SAY_ROLLIN,
  g: PLAYER_SAY_BYE,
  e: PLAYER_SAY_DELICOUS,
  f: PLAYER_SAY_FEEDME,
}

module.exports = { keyBindings }