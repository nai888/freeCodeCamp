import * as React from 'react';
import * as t from '../types';

export default function Tile(props: t.tileProps) {
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

  const foggy = props.foggy ? 'foggy' : null;

  return (
    <div
      className={'tile ' + props.tileType + ' ' + foggy}
      data-token={props.token ? props.token.tokenType : null}
      data-id={props.token ? props.token.id : null}
      data-coords={props.col + ',' + props.row}
    >
      {iconCode}
    </div>
  );
}
