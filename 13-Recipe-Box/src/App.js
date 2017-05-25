import React, { Component } from 'react';
import './App.css';
import RecipeList from './RecipeList';
import RecipePanel from './RecipePanel';

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
      // Re-enable this when ready to work with localStorage
      // localStorage.setItem("recipeData", whichData);
    }
    this.setState({ whichData });
  }

  render() {
    return (
      <div className="App">
        <RecipeList data={this.state.data} onClick={this.handleClick} />
        <RecipePanel data={this.state.data} onClick={this.handleClick} />
      </div>
    );
  }
}

export default App;