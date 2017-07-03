import * as React from 'react';
import { Tile } from '../redux/reducers';

interface Props extends Tile {
  row: number;
  col: number;
}

export default function Tile(props: Props) {
  let icon: string | null = null;

  if (props.token) {
    switch (props.token.tokenType) {
      case 'player':
        icon = 'user';
        break;
      case 'enemy':
        icon = 'bug';
        break;
      case 'boss':
        icon = 'user-secret';
        break;
      case 'health':
        icon = 'medkit';
        break;
      case 'skill':
        icon = 'chevron-up';
        break;
      case 'stairs':
        icon = 'angle-double-down';
        break;
      default:
        icon = null;
    }
  }

  const iconCode = icon !== null ? <i className={'fa fa-' + icon + ' fa-fw'} aria-hidden="true" /> : null;

  return (
    <div
      className={'tile ' + props.tileType}
      data-token={props.token ? props.token.tokenType : null}
      data-id={props.token ? props.token.id : null}
      data-coords={props.row + ',' + props.col}
    >
      {iconCode}
    </div>
  );
}
