import React, { Component } from 'react';
import AddItem from './AddItem';

class RecipeList extends Component {
  constructor(props) {
    super(props);
    this.handleClick = this.handleClick.bind(this);
  }

  handleClick(event) { // This needs to be updated
    // this.props.onClick(event.currentTarget.getAttribute("data-which"));
  }

  render() {
    return (
      <div className="recipe-list">
        <AddItem />
      </div>
    );
  }
}

export default RecipeList;