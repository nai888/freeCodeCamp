import React from 'react';
import PropTypes from 'prop-types';
import Button from '../Button/Button';
import './RecipeList.css';

function RecipeName(props) {
  propTypes = {
    recipeName: PropTypes.string.isRequired
  }

  return <li className="recipe-name">{props.recipeName}</li>;
}

function RecipeList(props) {
  propTypes = {
    handleAdd: PropTypes.func.isRequired,
    handleOpenClose: PropTypes.func.isRequired,
    data: PropTypes.array.isRequired
  }

  const handleAdd = function (event) {
    props.handleAdd(event);
  }

  const handleOpenClose = function (event) {
    props.handleOpenClose(event);
  }

  const recipeNames = props.data.map((recipe) => (
    <RecipeName
      recipeName={recipe.name}
      key={recipe.name}
      onClick={handleOpenClose}
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
        handleAdd={handleAdd}
      />
    </div>
  );
}

export default RecipeList;