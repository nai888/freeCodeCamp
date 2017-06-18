import React from 'react';
import PropTypes from 'prop-types';
import './Components.css';

export function Button(props) {
  var text = "";
  if (props.class === "start-stop") {
    text = props.playing ? "Pause" : "Start";
  } else if (props.class === "randomize") {
    text = "Randomize";
  } else if (props.class === "clear") {
    text = "Clear";
  }

  return (
    <button
      className={props.class}
      onClick={props.onClick}
    >{text}</button>
  );
}

Button.propTypes = {
  playing: PropTypes.bool,
  class: PropTypes.string.isRequired,
  onClick: PropTypes.func.isRequired
}

export function Cell(props) {
  return (
    <div
      className={"cell " + props.status}
      data-index={props.index}
      onClick={props.onClick}
    />
  );
}

Cell.propTypes = {
  status: PropTypes.string.isRequired,
  index: PropTypes.number.isRequired,
  onClick: PropTypes.func.isRequired
}