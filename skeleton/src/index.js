const View = require("./ttt-view.js");
const Game = require("../ttt_node/game.js");

// window.game = new Game();
// window.view = new View(window.game);

document.addEventListener("DOMContentLoaded", () => {
  const game = new Game();
  const ttt = document.querySelector(".ttt");
  const view = new View(game, ttt);
  view.setupBoard();
});


