const LEFT = "left";
const RIGHT = "right";
const MARK = {
  [LEFT]: "O",
  [RIGHT]: "X",
};

const App = () => {
  const state = {
    turn: LEFT,
    squares: [[], [], []],
    winner: null,
    leftScore: 0,
    rightScore: 0,
  };

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
    initState();
  };

  const initState = () => {
    state.squares = [[], [], []];
    items.forEach((item) => (item.innerText = " "));
    scoreBoard[LEFT].innerText = state[LEFT + "Score"];
    scoreBoard[RIGHT].innerText = state[RIGHT + "Score"];
  };

  const onClickItem = ({ target }) => {
    if (target.innerText) {
      return;
    }
    const [x, y] = target.dataset.position.split(",");

    target.innerText = MARK[state.turn];
    state.squares[x][y] = state.turn;
    checkWinner(x, y);

    if (state.winner) {
      setTimeout(win, 100);
      return;
    }
    changeTurn();
  };

  const checkWinner = (x, y) => {
    if (isHorizontal(x) || isVertical(y)) {
      state.winner = state.turn;
    } else if (x === y || Math.abs(x - y) === 2) {
      if (isDiagonal()) {
        state.winner = state.turn;
      }
    } else {
      state.winner = null;
    }
  };

  const isHorizontal = (x) => {
    return (
      state.squares[x][0] === state.turn &&
      state.squares[x][1] === state.turn &&
      state.squares[x][2] === state.turn
    );
  };

  const isVertical = (y) => {
    return (
      state.squares[0][y] === state.turn &&
      state.squares[1][y] === state.turn &&
      state.squares[2][y] === state.turn
    );
  };

  const isDiagonal = () => {
    return (
      (state.squares[0][0] === state.turn &&
        state.squares[1][1] === state.turn &&
        state.squares[2][2] === state.turn) ||
      (state.squares[0][2] === state.turn &&
        state.squares[1][1] === state.turn &&
        state.squares[2][0] === state.turn)
    );
  };

  const win = () => {
    alert(MARK[state.turn] + " 승리!");
    state[state.turn + "Score"]++;

    changeTurn();
    initState();
    state.winner = null;
  };

  const changeTurn = () => {
    state.turn = state.turn === LEFT ? RIGHT : LEFT;
  };

  const startNewGame = () => {
    changeTurn();
    initState();
  };

  const resetScore = () => {
    state.leftScore = 0;
    state.rightScore = 0;
    startNewGame();
  };

  init();
};

App();
