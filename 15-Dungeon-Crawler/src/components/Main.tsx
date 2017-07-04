import * as React from 'react';
import { StateType } from '../redux/props';
import * as red from '../redux/reducers';
import StatusBar from './StatusBar';
import Map from './Map';
import Log from './Log';
import './Main.css';

interface Props extends StateType {
  onHeal: () => red.PlayerAction;
  onTakeDamage: (dmg: number) => red.PlayerAction;
  onDealDamage: (id: number, dmg: number) => red.EnemyAction;
  onSkillsUp: () => red.PlayerAction;
  onPlayerDie: () => red.GameStateAction;
  onEnemyDie: (id: number, xp: number) => red.EnemyAction;
  onLevelUp: () => red.PlayerAction;
  onBossDie: () => red.GameStateAction;
  onMove: (dir: red.direction) => red.GameStateAction;
  onNewGame: () => red.GameStateAction;
}

export default function Main({
  player = red.defaultPlayerState,
  enemies = red.defaultEnemyArray,
  gameState = red.defaultGameState,
  log = red.openingLogMessage,
  onHeal,
  onTakeDamage,
  onDealDamage,
  onSkillsUp,
  onPlayerDie,
  onEnemyDie,
  onLevelUp,
  onBossDie,
  onMove,
  onNewGame,
}: Props) {
  return (
    <main>
      <StatusBar
        player={player}
        enemies={enemies}
        gameState={gameState}
      />
      <Map map={gameState.map} />
      <Log
        log={log}
        gameState={gameState}
        onNewGame={onNewGame}
      />
    </main>
  );
}
