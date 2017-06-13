import React from 'react';
import PropTypes from 'prop-types';
import Button from '../Button/Button';
import './RecipePanel.css';

function Ingredient(props) {
  propTypes = {
    name: PropTypes.string.isRequired
  }

  return <li className="ingredient">{props.name}</li>;
}

function RecipePanel(props) {
  propTypes = {
    handleEdit: PropTypes.func.isRequired,
    handleDelete: PropTypes.func.isRequired,
    data: PropTypes.array.isRequired
  }

  const handleEdit = function(event) {
    props.handleEdit(event);
  }

  const handleDelete = function(event) {
    props.handleDelete(event);
  }

  const ingredients = props.data.ingredients.map((ingredient) =>
    <Ingredient name={ingredient} key={ingredient} />
  );

  return (
    <div className="recipe-panel">
      <h2 className="recipe-title">{props.data.name}</h2>
      <ul className="ingredients-list">
        {ingredients}
      </ul>
      <Button
        className="edit-recipe change"
        name="Edit Recipe"
        onClick={handleEdit}
      />
      <Button
        className="delete-recipe delete"
        name="Delete Recipe"
        onClick={handleDelete}
      />
    </div>
  );
}

export default RecipePanel;