import * as React from 'react';
import * as t from '../types';
import Row from './Row';
import './Map.css';

export default function Map(props: t.mapProps) {
  const rows = props.map.map((row, i) => (
    <Row
      key={i}
      row={row}
      rowNum={i}
    />
  ));

  return (
    <div className="map">
      {rows}
    </div>
  );
}
