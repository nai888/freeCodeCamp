import React from 'react';
import PropTypes from 'prop-types';
import Button from '../Button/Button';
import './RecipePanel.css';

function Ingredient(props) {
  return (<li className="ingredient">{props.name}</li>);
}

Ingredient.propTypes = {
  name: PropTypes.string.isRequired
}

function RecipePanel(props) {
  const ingredients = props.data !== undefined ? props.data.ingredients.map((ingredient) =>
    <Ingredient name={ingredient} key={ingredient} />
  ) : null;

  return props.data === undefined ? <div className="recipe-panel" /> : (
    <div className="recipe-panel">
      <h2 className="recipe-title">{props.data.name}</h2>
      <ul className="ingredients-list">
        {ingredients}
      </ul>
      <Button
        className="edit-recipe change"
        name="Edit Recipe"
        onClick={props.handleEdit}
      />
      <Button
        className="delete-recipe delete"
        name="Delete Recipe"
        onClick={props.handleDelete}
      />
    </div>
  );
}

RecipePanel.propTypes = {
  handleEdit: PropTypes.func.isRequired,
  handleDelete: PropTypes.func.isRequired,
  data: PropTypes.object
}

export default RecipePanel;