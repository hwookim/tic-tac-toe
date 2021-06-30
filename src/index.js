const App = () => {
  const state = {
    turn: "O",
    squares: [[], [], []],
    winner: null,
  };

  const items = document.querySelectorAll(".grid-item");

  const init = () => {
    items.forEach((item) => item.addEventListener("click", onClickItem));
    initState();
  };

  const initState = () => {
    state.squares = [[], [], []];
    items.forEach((item) => (item.innerText = " "));
  };

  const onClickItem = ({ target }) => {
    if (target.innerText) {
      return;
    }
    const [x, y] = target.dataset.position.split(",");

    target.innerText = state.turn;
    state.squares[x][y] = state.turn;
    checkWinner(x, y);

    if (state.winner) {
      setTimeout(win, 100);
    }
    changeTurn();
  };

  const checkWinner = (x, y) => {
    if (checkHorizontal(x) || checkVertical(y)) {
      state.winner = state.turn;
    } else if (x === y || Math.abs(x - y) === 2) {
      if (checkDiagonal()) {
        state.winner = state.turn;
      }
    } else {
      state.winner = null;
    }
  };

  const checkHorizontal = (x) => {
    return (
      state.squares[x][0] === state.turn &&
      state.squares[x][1] === state.turn &&
      state.squares[x][2] === state.turn
    );
  };

  const checkVertical = (y) => {
    return (
      state.squares[0][y] === state.turn &&
      state.squares[1][y] === state.turn &&
      state.squares[2][y] === state.turn
    );
  };

  const checkDiagonal = () => {
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
    alert(state.turn + " 승리!");
    initState();
  };

  const changeTurn = () => {
    state.turn = state.turn === "O" ? "X" : "O";
  };

  init();
};

App();
