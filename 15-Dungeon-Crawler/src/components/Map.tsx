import * as React from 'react';
import { MapRow } from '../redux/reducers';
import Row from './Row';
import './Map.css';

interface Props {
  map: MapRow[];
}

export default function Map(props: Props) {
  const rows = props.map.map((row, i) => {
    return (
      <Row
        key={i}
        row={row}
        rowNum={i}
      />
    );
  });

  return (
    <div className="map">
      {rows}
    </div>
  );
}
