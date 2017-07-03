import * as React from 'react';
import { GameState, GameStateAction } from '../redux/reducers';

interface Props {
  log: string[];
  gameState: GameState;
  onNewGame: () => GameStateAction;
}

export default function Log(props: Props) {
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
