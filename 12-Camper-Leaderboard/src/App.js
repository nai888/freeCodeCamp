import React, { Component } from 'react';
import './App.css';
import Header from './Header';
import TBody from './TBody';

class App extends Component {
  constructor(props) {
    super(props);
    this.handleClick = this.handleClick.bind(this);
    this.state = { whichData: "recent" };
  }

  handleClick(whichData) {
    this.setState({ whichData });
  }

  render() {
    return (
      <table className="App">
        <thead>
          <tr className="headerRow">
            <Header text="Rank" />
            <Header span="2" text="Camper Name" />
            <Header text="Points Last 30 Days" which="recent" sortBy={this.state.whichData} onClick={this.handleClick} />
            <Header text="All Time Points" which="all" sortBy={this.state.whichData} onClick={this.handleClick} />
          </tr>
        </thead>
        <TBody whichData={this.state.whichData} />
      </table>
    );
  }
}

export default App;