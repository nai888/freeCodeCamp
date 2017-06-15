import React from 'react';
import PropTypes from 'prop-types';
import Button from '../Button/Button';
import './RecipeList.css';

function RecipeName(props) {
  return (<li className="recipe-name">{props.recipeName}</li>);
}

RecipeName.propTypes = {
  recipeName: PropTypes.string.isRequired
}

function RecipeList(props) {
  const recipeNames = props.data.map((recipe) => (
    <RecipeName
      recipeName={recipe.name}
      key={recipe.name}
      onClick={props.handleOpenClose}
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
        onClick={props.handleModal}
      />
    </div>
  );
}

RecipeList.propTypes = {
  handleAdd: PropTypes.func.isRequired,
  handleOpenClose: PropTypes.func.isRequired,
  data: PropTypes.array.isRequired
}

export default RecipeList;