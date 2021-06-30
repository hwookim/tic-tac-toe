import { LEFT, MARK, RIGHT } from "./constants.js";

export default class Game {
  constructor() {
    this.turn = null;
    this.squares = [[], [], []];
    this.scores = {
      [LEFT]: 0,
      [RIGHT]: 0,
    };
    this.winner = null;
  }

  startNewGame() {
    this.squares = [[], [], []];
    this.winner = null;
    this.changeTurn();
  }

  changeTurn() {
    this.turn = this.turn === LEFT ? RIGHT : LEFT;
  }

  markSquare(x, y) {
    this.squares[x][y] = this.turn;
  }

  checkWinner(x, y) {
    if (this.isHorizontal(x) || this.isVertical(y)) {
      this.winner = this.turn;
    } else if (x === y || Math.abs(x - y) === 2) {
      if (this.isDiagonal()) {
        this.winner = this.turn;
      }
    } else {
      this.winner = null;
    }
  }

  isHorizontal(x) {
    return (
      this.squares[x][0] === this.turn &&
      this.squares[x][1] === this.turn &&
      this.squares[x][2] === this.turn
    );
  }

  isVertical(y) {
    return (
      this.squares[0][y] === this.turn &&
      this.squares[1][y] === this.turn &&
      this.squares[2][y] === this.turn
    );
  }

  isDiagonal() {
    return (
      (this.squares[0][0] === this.turn &&
        this.squares[1][1] === this.turn &&
        this.squares[2][2] === this.turn) ||
      (this.squares[0][2] === this.turn &&
        this.squares[1][1] === this.turn &&
        this.squares[2][0] === this.turn)
    );
  }

  reflectScore() {
    this.scores[this.turn]++;
  }

  resetScore() {
    this.scores = {
      [LEFT]: 0,
      [RIGHT]: 0,
    };
  }

  getWinner() {
    return this.winner;
  }

  getScores() {
    return this.scores;
  }

  getCurrentMark() {
    return MARK[this.turn];
  }
}
