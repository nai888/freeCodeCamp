import React, { Component } from 'react';
import Button from '../Button/Button';
import './RecipeList.css';

function RecipeName(props) {
  return <li className="recipe-name">{props.recipeName}</li>;
}

class RecipeList extends Component {
  constructor(props) {
    super(props);
    this.handleAdd = this.handleAdd.bind(this);
    this.handleOpenClose = this.handleOpenClose.bind(this);
  }

  handleAdd(event) {
    this.props.handleAdd(event);
  }

  handleOpenClose(recipe) {
    this.props.handleOpenClose(recipe);
  }

  render() {
    const recipeNames = this.props.data.map((recipe) => (
      <RecipeName
        recipeName={recipe.name}
        key={recipe.name}
        onClick={this.props.handleOpenClose}
      />)
    );
    return (
      <div className="list">
        <ul className="recipe-list">
          {recipeNames}
        </ul>
        <Button
          className="add-recipe change"
          name="Add Recipe"
          handleAdd={this.props.handleAdd}
        />
      </div>
    );
  }
}

export default RecipeList;