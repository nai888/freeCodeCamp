import * as React from 'react';
import { connect } from 'react-redux';
import mapStateToProps, { StateType } from '../redux/props';
import mapDispatchToProps from '../redux/dispatcher';
import * as red from '../redux/reducers';
import StatusBar from './StatusBar';
import Map from './Map';
import Log from './Log';
import './Main.css';

connect(mapStateToProps, mapDispatchToProps)(Main);

interface Props extends StateType {
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
  onSetupMap,
  onGenEnemies,
  onMove,
  onNewGame
}: Props) {
  return (
    <main>
      <StatusBar
        player={player}
        enemies={enemies}
        gameState={gameState}
      />
      <Map map={gameState.map} />
      <Log log={log} />
    </main>
  );
}

export default Main;
