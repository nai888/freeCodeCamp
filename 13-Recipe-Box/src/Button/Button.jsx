import React from 'react';
import PropTypes from 'prop-types';
import './Button.css';

function Button(props) {
  return (<button className={props.className} onClick={props.onClick}>{props.name}</button>);
}

Button.propTypes = {
  className: PropTypes.string.isRequired,
  name: PropTypes.string.isRequired,
  onClick: PropTypes.func.isRequired
}

export default Button;