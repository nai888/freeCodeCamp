import React, { Component } from 'react';
import Button from './Button';

function Ingredient(props) {
  return <li className="ingredient">{props.name}</li>;
}

class RecipePanel extends Component {
  constructor(props) {
    super(props);
    this.handleEdit = this.handleEdit.bind(this);
    this.handleDelete = this.handleDelete.bind(this);
  }

  handleEdit(event) { // This needs to be updated
    // this.props.onClick(event.currentTarget.getAttribute("data-which"));
  }

  handleDelete(event) { // This needs to be updated
    // this.props.onClick(event.currentTarget.getAttribute("data-which"));
  }

  render() {
    const ingredients = this.props.data.ingredients.map((ingredient) =>
      <Ingredient name={ingredient} key={ingredient} />
    );
    return (
      <div className="recipe-panel">
        <h2 className="recipe-title">{this.props.data.name}</h2>
        <ul className="ingredients-list">
          {ingredients}
        </ul>
        <Button className="edit-recipe change" name="Edit Recipe" onClick={this.props.handleEdit} />
        <Button className="delete-recipe delete" name="Delete Recipe" onClick={this.props.handleDelete} />
      </div>
    );
  }
}

export default RecipePanel;