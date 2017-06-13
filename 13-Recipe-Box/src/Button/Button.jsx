import React from 'react';
import PropTypes from 'prop-types';
import './Button.css';

function Button(props) {
  propTypes = {
    className: PropTypes.string.isRequired,
    name: PropTypes.string.isRequired
  }

  return <button className={props.className}>{props.name}</button>;
}

export default Button;