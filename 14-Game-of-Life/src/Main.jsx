import React, { Component } from 'react';
import { Button, Cell } from './Components'
import './Main.css';

class Main extends Component {
  constructor(props) {
    super(props);
    this.newBoard = this.newBoard.bind(this);
    this.randomize = this.randomize.bind(this);
    this.cellAge = this.cellAge.bind(this);
    this.runGame = this.runGame.bind(this);
    this.handleClick = this.handleClick.bind(this);
    this.handleStartStop = this.handleStartStop.bind(this);
    this.state = { playing: false, board: [], generation: 0 };
  }

  componentDidMount() {
    var newBoard = [];
    for (var i = 0; i < 3200; i++) {
      newBoard.push("dead");
    }
    this.setState({ board: newBoard });
  }

  newBoard() {
    var newBoard = this.state.board;
    for (var i = 0; i < newBoard.length; i++) {
      newBoard[i] = "dead";
    }
    this.setState({ board: newBoard });
  }

  randomize() {
    this.handleStartStop();
    var newBoard = this.state.board;
    for (var i = 0; i < newBoard.length; i++) {
      const j = Math.floor(Math.random() * 5);
      newBoard[i] = j === 0 ? "live" : "dead";
    }
    this.setState({ board: newBoard });
  }

  cellAge(cell) {
    var newBoard = this.state.board;
    const cells = this.state.board.length; // The total number of cells
    const width = 80; // The width of cells on the board
    for (var i = 0; i < cells; i++) {
      // Identifies the location of the cell on the physical board
      function isNorth(c) { return c < width ? true : false; }
      function isSouth(c) { return c >= cells - width ? true : false; }
      function isWest(c) { return c % width === 0 ? true : false; }
      function isEast(c) { return (c + 1) % width === 0 ? true : false; }
      function isNonEdge(c) { return (!isNorth(c) && !isSouth(c) && !isWest(c) && !isEast(c)) ? true : false; }

      var count = 0;

      // Check northwest cell
      if (isNorth(i) && !isWest(i)) { // Northern edge, not the northwest corner
        if (this.state.board[i + cells - width - 1] === "live" || this.state.board[i + cells - width - 1] === "birth") {
          count++;
        }
      } else if (isWest(i) && !isNorth(i)) { // Western edge, not the northwest corner
        if (this.state.board[i - 1] === "live" || this.state.board[i - 1] === "birth") {
          count++;
        }
      } else if (isNorth(i) && isWest(i)) { // Northwest corner
        if (this.state.board[i + cells - 1] === "live" || this.state.board[i + cells - 1] === "birth") {
          count++;
        }
      } else { // Remainder of board handled normally
        if (this.state.board[i - width - 1] === "live" || this.state.board[i - width - 1] === "birth") {
          count++;
        }
      }
      // Check north cell
      if (isNorth(i)) { // Northern edge
        if (this.state.board[i + cells - width] === "live" || this.state.board[i + cells - width] === "birth") {
          count++;
        }
      } else { // Remainder of the board handled normally
        if (this.state.board[i - width] === "live" || this.state.board[i - width] === "birth") {
          count++;
        }
      }
      // Check northeast cell
      if (isNorth(i) && !isEast(i)) { // Northern edge, not the northeast corner
        if (this.state.board[i + cells - width + 1] === "live" || this.state.board[i + cells - width + 1] === "birth") {
          count++;
        }
      } else if (isEast(i) && !isNorth(i)) { // Eastern edge, not the northeast corner
        if (this.state.board[i - (2 * width) + 1] === "live" || this.state.board[i - (2 * width) + 1] === "birth") {
          count++;
        }
      } else if (isNorth(i) && isEast(i)) { // Northeast corner
        if (this.state.board[i + cells - (2 * width) + 1] === "live" || this.state.board[i + cells - (2 * width) + 1] === "birth") {
          count++;
        }
      } else { // Remainder of board handled normally
        if (this.state.board[i - width + 1] === "live" || this.state.board[i - width + 1] === "birth") {
          count++
        }
      }
      // Check west cell
      if (isWest(i)) { // Western edge
        if (this.state.board[i + width - 1] === "live" || this.state.board[i + width - 1] === "birth") {
          count++;
        }
      } else { // Remainder of the board handled normally
        if (this.state.board[i - 1] === "live" || this.state.board[i - 1] === "birth") {
          count++;
        }
      }
      // Check east cell
      if (isEast(i)) { // Eastern edge
        if (this.state.board[i - width + 1] === "live" || this.state.board[i - width + 1] === "birth") {
          count++
        }
      } else { // Remainder of the board handled normally
        if (this.state.board[i + 1] === "live" || this.state.board[i + 1] === "birth") {
          count++
        }
      }
      // Check southwest cell
      if (isSouth(i) && !isWest(i)) { // Southern edge, not the southwest corner
        if (this.state.board[i - cells + width - 1] === "live" || this.state.board[i - cells + width - 1] === "birth") {
          count++;
        }
      } else if (isWest(i) && !isSouth(i)) { // Western edge, not the southwest corner
        if (this.state.board[i + (2 * width) - 1] === "live" || this.state.board[i + (2 * width) - 1] === "birth") {
          count++;
        }
      } else if (isSouth(i) && isWest(i)) { // Southwest corner
        if (this.state.board[i - cells + (2 * width) - 1] === "live" || this.state.board[i - cells + (2 * width) - 1] === "birth") {
          count++;
        }
      } else { // Remainder of the board handled normally
        if (this.state.board[i + width - 1] === "live" || this.state.board[i + width - 1] === "birth") {
          count++
        }
      }
      // Check south cell
      if (isSouth(i)) { // Southern edge
        if (this.state.board[i - cells + width] === "live" || this.state.board[i - cells + width] === "birth") {
          count++
        }
      } else { // Remainder of the board handled normally
        if (this.state.board[i + width] === "live" || this.state.board[i + width] === "birth") {
          count++
        }
      }
      // Check southeast cell
      if (isSouth(i) && !isEast(i)) { // Southern edge, not the southeast corner
        if (this.state.board[i - cells + width + 1] === "live" || this.state.board[i - cells + width + 1] === "birth") {
          count++;
        }
      } else if (isEast(i) && !isSouth(i)) { // Eastern edge, not the southeast corner
        if (this.state.board[i + 1] === "live" || this.state.board[i + 1] === "birth") {
          count++;
        }
      } else if (isSouth(i) && isEast(i)) { // Southeast corner
        if (this.state.board[i - cells + 1] === "live" || this.state.board[i - cells + 1] === "birth") {
          count++;
        }
      } else { // Remainder of the board handled normally
        if (this.state.board[i + width + 1] === "live" || this.state.board[i + width + 1] === "birth") {
          count++
        }
      }

      // Rules of the game
      if ((this.state.board[i] === "live" || this.state.board[i] === "birth") && (count < 2 || count > 3)) {
        newBoard[i] = "dead";
      } else if (this.state.board[i] === "dead" && count === 3) {
        newBoard[i] = "birth";
      } else if (this.state.board[i] === "birth" && (count === 2 || count === 3)) {
        newBoard[i] = "live";
      }
    }
    this.state.board === newBoard ? this.handleStartStop() : this.setState({ board: newBoard });
  }

  runGame() {
    /* Disabled for now
    if (this.state.playing) {
      const newGeneration = this.state.generation + 1;
      this.cellAge();
      this.setState({ generation: newGeneration });
      setTimeout(() => { this.runGame(); }, 1000);
    }
    */
  }

  handleClick(e) {
    const i = e.target.dataset.index;
    var newBoard = this.state.board;
    newBoard[i] = newBoard[i] === "dead" ? "live" : "dead";
    this.setState({ board: newBoard });
  }

  handleStartStop() {
    this.state.playing ? this.setState({ playing: false }, this.runGame()) : this.setState({ playing: true }, this.runGame());
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