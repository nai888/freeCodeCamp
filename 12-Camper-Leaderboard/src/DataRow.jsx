import React, { Component } from 'react';

function DataRow(props) {
  return (
    <tr>
      <td>{props.rank}</td>
      <td><img src={props.avatar} alt={props.username + " avatar"} /></td>
      <td>{props.username}</td>
      <td>{props.recPoints}</td>
      <td>{props.allPoints}</td>
    </tr>
  );
}

export default DataRow;