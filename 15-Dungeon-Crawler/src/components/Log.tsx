import * as React from 'react';
import * as t from '../types';

export default function Log(props: t.logProps) {
  const logMessages = props.log.map((message: string, i: number) => {
    return (
      <p key={props.log.length - i}>
        {message}
      </p>
    );
  });

  const newGameButton = !props.gameState.playing ? (
    <button
      className="new-game"
      onClick={props.onNewGame}
    >
      New Game
    </button>
  ) : null;

  return (
    <div className="log">
      <h2>
        <i className="fa fa-pencil-square-o fa-fw" aria-hidden="true" alt="Log" />
      </h2>
      {newGameButton}
      {logMessages}
    </div>
  );
}
