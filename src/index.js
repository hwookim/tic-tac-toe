const App = () => {
  const state = {
    turn: "O",
    squares: [[], [], []],
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
    changeTurn();
  };

  const changeTurn = () => {
    state.turn = state.turn === "O" ? "X" : "O";
  };

  init();
};

App();
