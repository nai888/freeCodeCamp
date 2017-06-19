import React, { Component } from 'react';
import { Button, Cell } from './Components'
import './Main.css';

class Main extends Component {
  constructor(props) {
    super(props);
    this.newBoard = this.newBoard.bind(this);
    this.randomize = this.randomize.bind(this);
    this.checkCells = this.checkCells.bind(this);
    this.runGame = this.runGame.bind(this);
    this.handleClick = this.handleClick.bind(this);
    this.handleStartStop = this.handleStartStop.bind(this);
    this.state = { playing: false, board: [], width: 80, height: 40, generation: 0 };
  }

  componentDidMount() {
    var newBoard = [];
    for (var i = 0; i < (this.state.width * this.state.height); i++) {
      newBoard.push("dead");
    }
    this.setState({ board: newBoard });
  }

  newBoard() {
    var newBoard = this.state.board;
    for (var i = 0; i < newBoard.length; i++) {
      newBoard[i] = "dead";
    }
    this.setState({ playing: false, board: newBoard, generation: 0 });
  }

  randomize() {
    if (this.state.playing) {
      this.handleStartStop();
    }
    var newBoard = this.state.board;
    for (var i = 0; i < newBoard.length; i++) {
      const j = Math.floor(Math.random() * 6);
      newBoard[i] = j === 0 ? "live" : "dead";
    }
    this.setState({ board: newBoard });
  }

  checkCells(i) {
    const width = this.state.width; // The width of cells on the board
    const cells = width * this.state.height; // The total number of cells
    const board = this.state.board;
    // Identifies the location of a cell on the physical board
    const isNorth = (c) => { return (c < width) ? true : false; }
    const isSouth = (c) => { return (c >= cells - width) ? true : false; }
    const isWest = (c) => { return (c % width === 0) ? true : false; }
    const isEast = (c) => { return ((c + 1) % width === 0) ? true : false; }
    const living = (c) => { return (c === "live" || c === "birth") ? true : false; }
    let count = 0;
    // Check northern edge wrapping to bottom
    if (isNorth(i)) {
      let diff = cells - width;
      if (!isWest(i) && living(board[i + diff - 1])) { // N check NW
        count++;
      } else if (isWest(i) && living(board[i + cells - 1])) { // NW corner check NW
        count++;
      }
      if (!isEast(i) && living(board[i + diff + 1])) { // N check NE
        count++;
      } else if (isEast(i) && living(board[i + cells - (2 * width) + 1])) { // NE corner check NE
        count++;
      }
      if (living(board[i + diff])) { // N check N
        count++;
      }
    }
    // Check southern edge wrapping to top
    if (isSouth(i)) {
      let diff = width - cells;
      if (!isWest(i) && living(board[i + diff - 1])) { // S check SW
        count++;
      } else if (isWest(i) && living(board[i - cells + (2 * width) - 1])) { // SW corner check SW
        count++;
      }
      if (!isEast(i) && living(board[i + diff + 1])) { // S check SE
        count++;
      } else if (isEast(i) && living(board[i - cells + 1])) { // SE corner check SE
        count++;
      }
      if (living(board[i + diff])) { // S check S
        count++;
      }
    }
    // Check western edge wrapping to right
    if (isWest(i)) {
      if (!isNorth(i) && living(board[i - 1])) { // W check NW
        count++;
      }
      if (!isSouth(i) && living(board[i + (2 * width) - 1])) { // W check SW
        count++;
      }
      if (living(board[i + width - 1])) { // W check W
        count++;
      }
    }
    // Check eastern edge wrapping to left
    if (isEast(i)) {
      if (!isNorth(i) && living(board[i - (2 * width) + 1])) { // E check NE
        count++;
      }
      if (!isSouth(i) && living(board[i + 1])) { // E check SE
        count++;
      }
      if (living(board[i - width + 1])) { // E check E
        count++;
      }
    }
    // Check all normal checks
    if (!isNorth(i)) {
      let diff = 0 - width;
      if (!isWest(i) && living(board[i + diff - 1])) { // Check NW
        count++;
      }
      if (!isEast(i) && living(board[i + diff + 1])) { // Check NE
        count++;
      }
      if (living(board[i + diff])) { // Check N
        count++;
      }
    }
    if (!isSouth(i)) {
      let diff = width;
      if (!isWest(i) && living(board[i + diff - 1])) { // Check SW
        count++;
      }
      if (!isEast(i) && living(board[i + diff + 1])) { // Check SE
        count++;
      }
      if (living(board[i + diff])) { // Check S
        count++;
      }
    }
    if (!isEast(i) && living(board[i + 1])) {
      count++;
    }
    if (!isWest(i) && living(board[i - 1])) {
      count++;
    }
    return count;
  }

  runGame() {
    if (this.state.playing) {
      var newBoard = [];
      const cells = this.state.width * this.state.height;
      let living = 0;
      for (var i = 0; i < cells; i++) {
        const check = this.checkCells(i);
        // Rules of the game
        if (this.state.board[i] === "dead" && check === 3) {
          newBoard.push("birth");
        } else if ((this.state.board[i] === "birth" || this.state.board[i] === "live") && (check === 2 || check === 3)) {
          newBoard.push("live");
        } else {
          newBoard.push("dead");
        }
        // Count living, so we can know if whole board is dead
        if (newBoard[i] === "live" || newBoard[i] === "birth") {
          living++;
        }
      }
      if (living === 0) {
        this.handleStartStop();
      }
      const newGeneration = this.state.generation + 1;
      this.setState({ board: newBoard, generation: newGeneration }, function () {
        setTimeout(() => {
          this.runGame();
        }, 25);
      });
    }
  }

  handleClick(e) {
    const i = e.target.dataset.index;
    var newBoard = this.state.board;
    newBoard[i] = newBoard[i] === "dead" ? "live" : "dead";
    this.setState({ board: newBoard });
  }

  handleStartStop() {
    this.state.playing ? this.setState({ playing: false }) : this.setState({ playing: true }, function () { this.runGame(); });
  }

  render() {
    const cells = this.state.board.map((status, i) =>
      <Cell
        status={status}
        index={i}
        key={i}
        onClick={this.handleClick}
      />
    );

    return (
      <main>
        <div className="board">
          {cells}
        </div>
        <div className="controls">
          <div className="buttons">  
            <Button
              playing={this.state.playing}
              class="start-stop"
              onClick={this.handleStartStop}
            />
            <Button
              class="randomize"
              onClick={this.randomize}
            />
            <Button
              class="clear"
              onClick={this.newBoard}
            />
          </div>
          <div className="generations">
            <h2>Generations: {this.state.generation}</h2>
          </div>
        </div>
      </main>
    );
  }
}

export default Main;
