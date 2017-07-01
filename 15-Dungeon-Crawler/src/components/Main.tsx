import * as React from 'react';
import { connect } from 'react-redux';
import mapStateToProps from '../redux/props';
import mapDispatchToProps from '../redux/dispatcher';
import * as red from '../redux/reducers';
import StatusBar from './StatusBar';
import Map from './Map';
import Log from './Log';
import './Main.css';

connect(mapStateToProps, mapDispatchToProps)(Main);

export interface MainProps {
  player: red.Player;
  enemy: red.Enemy[];
  gameState: red.GameState;
  log: string[];
  onHeal?: () => void;
  onTakeDamage?: () => void;
  onDealDamage?: () => void;
  onSkillsUp?: () => void;
  onPlayerDie?: () => void;
  onEnemyDie?: () => void;
  onLevelUp?: () => void;
  onBossDie?: () => void;
  onSetupMap?: () => void;
  onGenEnemies?: () => void;
  onMove?: () => void;
  onNewGame?: () => void;
}

function Main({
  player = red.defaultPlayerState,
  enemy = red.defaultEnemyArray,
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
  onSetupMap,
  onGenEnemies,
  onMove,
  onNewGame
}: MainProps) {
  return (
    <main>
      <StatusBar />
      <Map />
      <Log log={log} />
    </main>
  );
}

export default Main;
