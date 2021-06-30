const init = () => {
  let turn = "O";
  const items = document.querySelectorAll(".grid-item");

  const changeTurn = () => {
    turn = turn === "O" ? "X" : "O";
  };

  const onClickItem = ({ target }) => {
    if (target.innerText) {
      return;
    }
    target.innerText = turn;
    changeTurn();
  };

  items.forEach((item) => item.addEventListener("click", onClickItem));
};

init();
