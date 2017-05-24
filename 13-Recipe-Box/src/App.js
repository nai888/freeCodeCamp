import React, { Component } from 'react';
import './App.css';

class App extends Component {
  constructor(props) {
    super(props);
    this.handleClick = this.handleClick.bind(this);
    const defaultData = [{ name: "Pumpkin Pie", ingredients: ["Sweetened condensed milk", "Eggs", "Pumpkin pie spice", "Pie crust"] }, { name: "Spaghetti", ingredients: ["Pasta", "Sauce", "Vegetables"] }];
    if (typeof (Storage) !== "undefined" && localStorage.recipeData === undefined) {
      // Re-enable this when ready to work with localStorage
      // localStorage.setItem("recipeData", defaultData);
    }
    this.state = { data: defaultData };
  }

  handleClick(whichData) {
    if (typeof (Storage) !== "undefined") {
      localStorage.setItem("recipeData", whichData);
    }
    this.setState({ whichData });
  }

  render() {
    return (
      <div className="App">
      </div>
    );
  }
}

export default App;