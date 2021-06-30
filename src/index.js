import Game from "./Game.js";

import { LEFT, RIGHT } from "./constants.js";

const App = () => {
  const game = new Game();

  const items = document.querySelectorAll(".grid-item");
  const scoreBoard = {
    left: document.querySelector(".left-score"),
    right: document.querySelector(".right-score"),
  };
  const newGameBtn = document.querySelector(".new-game-btn");
  const resetScoreBtn = document.querySelector(".reset-score-btn");

  const init = () => {
    items.forEach((item) => item.addEventListener("click", onClickItem));
    newGameBtn.addEventListener("click", startNewGame);
    resetScoreBtn.addEventListener("click", resetScore);
    startNewGame();
  };

  const startNewGame = () => {
    const scores = game.getScores();
    items.forEach((item) => (item.innerText = " "));
    scoreBoard[LEFT].innerText = scores[LEFT];
    scoreBoard[RIGHT].innerText = scores[RIGHT];

    game.startNewGame();
  };

  const onClickItem = ({ target }) => {
    if (target.innerText) {
      return;
    }
    const [x, y] = target.dataset.position.split(",");

    target.innerText = game.getCurrentMark();
    game.markSquare(x, y);
    game.checkWinner(x, y);

    if (game.getWinner()) {
      setTimeout(win, 100);
      return;
    }
    game.changeTurn();
  };

  const win = () => {
    alert(game.getCurrentMark() + " 승리!");
    game.reflectScore();

    startNewGame();
  };

  const resetScore = () => {
    game.resetScore();
    startNewGame();
  };

  init();
};

App();
