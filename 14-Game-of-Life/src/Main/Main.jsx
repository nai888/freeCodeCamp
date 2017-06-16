import React, { Component } from 'react';
import PropTypes from 'prop-types';
import './Main.css';

function Cell(props) {
  return <div className={"cell " + props.status + " cell" + props.index} />
}

Cell.propTypes = {
  status: PropTypes.string.isRequired,
  index: PropTypes.number.isRequired
}

class Main extends Component {
  constructor(props) {
    super(props);
    this.cellBirth = this.cellBirth.bind(this);
    this.cellLive = this.cellLive.bind(this);
    this.cellDead = this.cellDead.bind(this);
    this.randomize = this.randomize.bind(this);
    this.handleClick = this.handleClick.bind(this);
    this.handleStartStop = this.handleStartStop.bind(this);
    this.state = { playing: false, board: [] };
  }

  componentDidMount() {
    var newBoard = [];
    for (var i = 0; i < 3200; i++) {
      newBoard.push("dead");
    }
    newBoard[248] = "birth";
    newBoard[252] = "live";
    this.setState({ board: newBoard });
  }

  cellBirth(cell) {
    // change the cell's status in the state to "birth"
  }

  cellLive(cell) {
    // if the cell's status in the state is "birth" and it continues to live, change the cell's status in the state to "live"
  }

  cellDead(cell) {
    // change the cell's status in the state to "dead"
  }

  randomize() {
    // if running, pause the game; clear the board and randomly fill it again
  }

  handleClick(e) {
    // if clicked cell's status is "dead", change to "live"; if clicked cell's status is "birth" or "live", change to "dead"
  }

  handleStartStop() {
    // if paused, start the game; if running, pause the game
  }

  render() {
    const cells = this.state.board.map((status, i) =>
      <Cell
        status={status}
        index={i}
        key={i}
      />
    );

    return (
      <main>
        <div className="board">
          {cells}
        </div>
        <div className="controls">
        </div>
      </main>
    );
  }
}

export default Main;