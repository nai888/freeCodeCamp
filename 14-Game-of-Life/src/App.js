import React, { Component } from 'react';
import PropTypes from 'prop-types';
import './App.css';

class App extends Component {
  render() {
    return (
      <div className="App">
        <header>
          <h1>The Game of Life</h1>
          <p className="subtitle"><a href="https://en.wikipedia.org/wiki/Conway%27s_Game_of_Life" target="_blank" rel="noopener noreferrer">learn about the Game of Life</a></p>
        </header>
        <main>
        </main>
        <footer>
          <p>Built by <a href="https://www.freecodecamp.com/nai888" target="_blank" rel="noopener noreferrer">Ian A. Cook</a>, copyright &copy; 2017. <a href="https://github.com/nai888/freeCodeCamp/tree/master/14-Game-of-Life" target="_blank" rel="noopener noreferrer">View this project on GitHub.</a></p>
        </footer>
      </div>
    );
  }
}

export default App;