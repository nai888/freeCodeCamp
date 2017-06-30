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
      <Log />
    </main>
  );
}

export default Main;
