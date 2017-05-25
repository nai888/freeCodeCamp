import React, { Component } from 'react';

class RecipePanel extends Component {
  constructor(props) {
    super(props);
    this.handleClick = this.handleClick.bind(this);
  }

  handleClick(event) { // This needs to be updated
    // this.props.onClick(event.currentTarget.getAttribute("data-which"));
  }

  render() {
    return (
      <div className="recipe-panel">
      </div>
    );
  }
}

export default RecipePanel;