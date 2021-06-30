const App = () => {
  const state = {
    turn: "O",
  };

  const items = document.querySelectorAll(".grid-item");

  const changeTurn = () => {
    state.turn = state.turn === "O" ? "X" : "O";
  };

  const onClickItem = ({ target }) => {
    if (target.innerText) {
      return;
    }

    target.innerText = state.turn;
    changeTurn();
  };

  items.forEach((item) => item.addEventListener("click", onClickItem));
};

App();
