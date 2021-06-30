const App = () => {
  const state = {
    turn: "O",
  };

  const init = () => {
    const items = document.querySelectorAll(".grid-item");
    items.forEach((item) => item.addEventListener("click", onClickItem));
  };

  const onClickItem = ({ target }) => {
    if (target.innerText) {
      return;
    }

    target.innerText = state.turn;
    changeTurn();
  };

  const changeTurn = () => {
    state.turn = state.turn === "O" ? "X" : "O";
  };

  init();
};

App();
