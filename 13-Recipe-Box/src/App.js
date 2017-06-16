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
    this.handleAdd = this.handleAdd.bind(this);
    this.handleEdit = this.handleEdit.bind(this);
    this.handleOpenClose = this.handleOpenClose.bind(this);
    this.handleSave = this.handleSave.bind(this);
    this.handleDelete = this.handleDelete.bind(this);

    const defaultData = [{ name: "Pumpkin Pie", ingredients: ["Sweetened condensed milk", "Eggs", "Pumpkin pie spice", "Pie crust"] }, { name: "Spaghetti", ingredients: ["Pasta", "Sauce", "Vegetables"] }];
    var startData = [];

    if (typeof (Storage) !== "undefined" && localStorage.recipeData === undefined) {
      // Re-enable this when ready to work with localStorage
      // localStorage.setItem("recipeData", defaultData);
      startData = defaultData; // change this to read from localStorage instead
    } else {
      startData = defaultData;
    }

    this.state = { data: startData, show: null, showModal: false, addEdit: "add", defaultName: [], defaultIngredients: [] };
  }

  handleModal() { this.setState({ showModal: this.state.showModal === true ? false : true }); }

  handleAdd() {
    this.setState({ addEdit: "add", defaultName: [], defaultIngredients: [] },
      function () {
        this.handleModal();
      }
    );
  }

  handleEdit() {
    this.setState({ addEdit: "edit", defaultName: this.state.data[this.state.show].name, defaultIngredients: this.state.data[this.state.show].ingredients },
      function () {
        this.handleModal();
      }
    );
  }

  handleOpenClose(showWhich) {
    this.setState({ show: this.state.show === showWhich ? null : showWhich });
  }

  handleSave() {
    var bufferData = this.state.data.slice();
    var nameInput = document.getElementById("recipe-name-input").value;
    var ingredientsInput = document.getElementById("ingredients-input").value;
    if (nameInput !== "" || ingredientsInput !== "") {
      if (this.state.addEdit === "add") {
        bufferData.push({ name: nameInput, ingredients: ingredientsInput.split(",") });
      } else if (this.state.addEdit === "edit") {
        bufferData[this.state.show] = { name: nameInput, ingredients: ingredientsInput.split(",") };
      }
      if (typeof (Storage) !== "undefined") {
        // Re-enable this when ready to work with localStorage
        // localStorage.setItem("recipeData", whichData);
      }
      this.setState({ data: bufferData },
        function () {
          this.handleModal();
          if (this.state.addEdit === "add") {
            this.setState({ show: this.state.data.length - 1 });
          }
        }
      );
    }
  }

  handleDelete() {
    var bufferData = this.state.data.slice();
    bufferData.splice(this.state.show, 1);
    this.setState({ data: bufferData, show: null });
    if (typeof (Storage) !== "undefined") {
      // Re-enable this when ready to work with localStorage
      // localStorage.setItem("recipeData", whichData);
    }
  }

  render() {
    return (
      <div className="App">
        <RecipeList
          data={this.state.data}
          handleOpenClose={this.handleOpenClose}
          handleAdd={this.handleAdd}
        />
        <RecipePanel
          data={this.state.data[this.state.show]}
          handleEdit={this.handleEdit}
          handleDelete={this.handleDelete}
        />
        <Modal
          isOpen={this.state.showModal}
          contentLabel="Add/Edit Recipe"
          className="modal"
        >
          <h1>Add or Edit Recipe</h1>
          <form>
            <label htmlFor="recipe-name-input">Recipe Name</label>
            <input name="recipe-name" type="text" id="recipe-name-input" placeholder="Recipe Name" defaultValue={this.state.defaultName} />
            <label htmlFor="ingredients-input">Ingredients</label>
            <textarea name="ingredients-list" id="ingredients-input" placeholder="Ingredients,Separated by,Commas" defaultValue={this.state.defaultIngredients} />
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