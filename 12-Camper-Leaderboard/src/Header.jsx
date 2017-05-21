import React, { Component } from 'react';

class Header extends Component {
  constructor(props) {
    super(props);
    this.handleClick = this.handleClick.bind(this);
  }

  handleClick(event) {
    this.props.onClick(event.currentTarget.getAttribute("data-which"));
  }

  render() {
    var nameClass = null;
    this.props.which === this.props.sortBy ? nameClass = "active" : nameClass = "inactive";
    return this.props.which !== undefined ? <th data-which={this.props.which} className={nameClass} onClick={this.handleClick}>{this.props.text}</th> : <th colSpan={this.props.span}>{this.props.text}</th>;
  }
}

export default Header;