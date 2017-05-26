import React, { Component } from 'react';
import Button from './Button';

function RecipeName(props) {
  return <li className="recipe-name">{props.recipeName}</li>;
}

class RecipeList extends Component {
  constructor(props) {
    super(props);
    this.handleAdd = this.handleAdd.bind(this);
    this.handleOpenClose = this.handleOpenClose.bind(this);
  }

  handleAdd(event) { // This needs to be updated
    // this.props.onClick(event.currentTarget.getAttribute("data-which"));
  }

  handleOpenClose(recipe) { // This needs to be updated
    // this.props.onClick(event.currentTarget.getAttribute("data-which"));
  }

  render() {
    const recipeNames = this.props.data.map((recipe) =>
      <RecipeName recipeName={recipe.name} key={recipe.name} onClick={this.props.handleOpenClose} />
    );
    return (
      <div className="list">
        <ul className="recipe-list">
          {recipeNames}
        </ul>
        <Button className="add-recipe" name="Add Recipe" onClick={this.props.handleAdd} />
      </div>
    );
  }
}

export default RecipeList;