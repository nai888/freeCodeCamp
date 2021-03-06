import * as React from 'react';
import * as t from '../types';

export default function StatusBar(props: t.statusBarProps) {
  const enemyCount: () => number = () => {
    let count: number = 0;
    for (let i = 0; i < props.gameState.map.length; i++) {
      for (let j = 0; j < props.gameState.map[i].length; j++) {
        const tile: t.tile = props.gameState.map[i][j];
        if (tile.token && tile.token.tokenType === 'enemy') {
          count++;
        }
      }
    }
    return count;
  };

  return (
    <div className="status-bar">
      <h2>
        <i className="fa fa-user fa-fw" aria-hidden="true" alt="Status" />
      </h2>
      <p>
        <i className="fa fa-medkit fa-fw" aria-hidden="true" /> <strong>Health:</strong> {props.player.health}
      </p>
      <p>
        <i className="fa fa-level-up fa-fw" aria-hidden="true" /> <strong>Level:</strong> {props.player.level}
        {' '}
        ({props.player.xp}/{props.player.nextXP} xp)
      </p>
      <p>
        <i className="fa fa-chevron-up fa-fw" aria-hidden="true" /> <strong>Skill:</strong> {props.player.skill}
      </p>
      <p>
        <i className="fa fa-bullseye fa-fw" aria-hidden="true" /> <strong>Damage:</strong>
        {' '}
        d{4 + (2 * props.player.level)} + {props.player.skill}
      </p>
      <p>
        <i className="fa fa-angle-double-down fa-fw" aria-hidden="true" /> <strong>Floor:</strong>
        {' '}
        {props.gameState.floor} of 4
      </p>
      <p>
        <i className="fa fa-bug fa-fw" aria-hidden="true" /> <strong>Enemies:</strong> {enemyCount()} remaining
      </p>
      <p>
        <i className="fa fa-user-secret fa-fw" aria-hidden="true" /> <strong>Boss:</strong>
        {' '}
        {props.gameState.floor === 4 ? 'on this floor' : 'not on this floor'}
      </p>
    </div>
  );
}
