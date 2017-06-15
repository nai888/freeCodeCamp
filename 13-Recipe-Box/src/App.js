import React, { Component } from 'react';
import Modal from 'react-modal';
import './App.css';
import RecipeList from './RecipeList/RecipeList';
import RecipePanel from './RecipePanel/RecipePanel';
import Button from './Button/Button';

class App extends Component {
  constructor(props) {
    super(props);
    this.handleModal = this.handleModal.bind(this);
    this.handleOpenClose = this.handleOpenClose.bind(this);
    this.handleSave = this.handleSave.bind(this);
    this.handleDelete = this.handleDelete.bind(this);
    const defaultData = [{ name: "Pumpkin Pie", ingredients: ["Sweetened condensed milk", "Eggs", "Pumpkin pie spice", "Pie crust"] }, { name: "Spaghetti", ingredients: ["Pasta", "Sauce", "Vegetables"] }];
    if (typeof (Storage) !== "undefined" && localStorage.recipeData === undefined) {
      // Re-enable this when ready to work with localStorage
      // localStorage.setItem("recipeData", defaultData);
    }
    this.state = { data: defaultData, openData: 1, show: null, showModal: true };
  }

  handleModal() {
    this.setState({ showModal: this.state.showModal === true ? false : true });
  }

  handleOpenClose(showWhich) {
    this.setState({ show: this.state.show === showWhich ? null : showWhich });
  }

  handleSave(whichData) {
    if (typeof (Storage) !== "undefined") {
      // Re-enable this when ready to work with localStorage
      // localStorage.setItem("recipeData", whichData);
    }
    this.setState({ data: whichData });
    this.handleModal();
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
        <RecipeList
          data={this.state.data}
          handleOpenClose={this.handleOpenClose}
          handleModal={this.handleModal}
        />
        <RecipePanel
          data={this.state.data[this.state.openData]}
          handleModal={this.handleModal}
          handleDelete={this.handleDelete}
        />
        <Modal
          isOpen={this.state.showModal}
          contentLabel="Add/Edit Recipe"
          className="modal"
        >
          <h1>Add or Edit Recipe</h1>
          <form>
            <label for="recipe-name-input">Recipe Name</label>
            <input name="recipe-name" type="text" id="recipe-name-input" placeholder="Recipe Name" value={this.state.data[this.state.openData].name} />
            <label for="ingredients-input">Recipe Name</label>
            <textarea name="ingredients-list" id="ingredients-input" placeholder="Ingredients,Separated By,Commas" value={this.state.data[this.state.openData].ingredients} />
          </form>
          <Button
            className="save-recipe change"
            name="Save Recipe"
            onClick={this.handleSave}
          />
          <Button
            className="cancel delete"
            name="Cancel"
            onClick={this.handleModal}
          />
        </Modal>
      </div>
    );
  }
}

export default App;