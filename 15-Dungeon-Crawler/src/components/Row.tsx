import * as React from 'react';
import { MapRow } from '../redux/reducers';
import Tile from './Tile';

interface Props {
  row: MapRow;
  rowNum: number;
}

export default function Row(props: Props) {
  const tiles = props.row.map((tile, i) => {
    return (
      <Tile
        key={i}
        tileType={tile.tileType}
        token={tile.token}
        row={props.rowNum}
        col={i}
      />
    );
  });

  return (
    <div
      className="row"
      data-row={props.rowNum}
    >
      {tiles}
    </div>
  );
}
