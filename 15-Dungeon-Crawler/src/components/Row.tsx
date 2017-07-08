import * as React from 'react';
import * as t from '../types';
import Tile from './Tile';

export default function Row(props: t.rowProps) {
  const tiles = props.row.map((tile, i) => (
    <Tile
      key={i}
      tileType={tile.tileType}
      foggy={tile.foggy}
      token={tile.token}
      row={props.rowNum}
      col={i}
    />
  ));

  return (
    <div
      className="row"
      data-row={props.rowNum}
    >
      {tiles}
    </div>
  );
}
