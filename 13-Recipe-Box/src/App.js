import React, { Component } from 'react';
import './App.css';
import RecipeList from './RecipeList';
import RecipePanel from './RecipePanel';

class App extends Component {
  constructor(props) {
    super(props);
    this.handleAdd = this.handleAdd.bind(this);
    this.handleOpenClose = this.handleOpenClose.bind(this);
    this.handleEdit = this.handleEdit.bind(this);
    this.handleDelete = this.handleDelete.bind(this);
    const defaultData = [{ name: "Pumpkin Pie", ingredients: ["Sweetened condensed milk", "Eggs", "Pumpkin pie spice", "Pie crust"] }, { name: "Spaghetti", ingredients: ["Pasta", "Sauce", "Vegetables"] }];
    if (typeof (Storage) !== "undefined" && localStorage.recipeData === undefined) {
      // Re-enable this when ready to work with localStorage
      // localStorage.setItem("recipeData", defaultData);
    }
    this.state = { data: defaultData, show: null };
  }

  handleAdd(whichData) {
    if (typeof (Storage) !== "undefined") {
      // Re-enable this when ready to work with localStorage
      // localStorage.setItem("recipeData", whichData);
    }
    this.setState({ data: whichData });
  }

  handleOpenClose(showWhich) {
    this.setState({ show: this.setState === showWhich ? null : showWhich });
  }

  handleEdit() {
    this.setState({ });
  }

  handleDelete(whichData) {
    if (typeof (Storage) !== "undefined") {
      // Re-enable this when ready to work with localStorage
      // localStorage.setItem("recipeData", whichData);
    }
    this.setState({ data: whichData });
  }

  render() {
    return (
      <div className="App">
        <RecipeList data={this.state.data} onAdd={this.handleAdd} onOpen={this.handleOpenClose} />
        <RecipePanel data={this.state.data[1]} onClose={this.handleClose} onDelete={this.handleDelete} />
      </div>
    );
  }
}

export default App;