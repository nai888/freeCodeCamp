import * as React from 'react';
import { connect } from 'react-redux';
import mapStateToProps from '../redux/props';
import mapDispatchToProps from '../redux/dispatcher';
import * as red from '../redux/reducers';

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
      <p>In the future, you <i className="fa fa-user fa-fw" aria-hidden="true" /> will heal
      {' '}
      <i className="fa fa-medkit fa-fw" aria-hidden="true" /> and strengthen your skills
      {' '}
      <i className="fa fa-arrow-up fa-fw" aria-hidden="true" /> as you travel deeper into the dungeon
      {' '}
      <i className="fa fa-chevron-down fa-fw" aria-hidden="true" />, fight enemies
      {' '}
      <i className="fa fa-bug fa-fw" aria-hidden="true" /> and level up
      {' '}
      <i className="fa fa-level-up fa-fw" aria-hidden="true" /> until you can beat the boss
      {' '}
      <i className="fa fa-user-secret fa-fw" aria-hidden="true" />.</p>
      <p>Here&rsquo;s the map.</p>
      <div className="map">
        <i className="fa fa-map fa-fw" aria-hidden="true" />
      </div>
      <p>Actually, not really. It&rsquo;s not ready yet.</p>
      <p>With no map, you should stop, or you&rsquo;ll get lost.</p>
      <p>Then again, maybe you <em>want</em> to get lost.</p>
      <p>Then again, not all who wander are lost.</p>
      <p>Really, though, what do I care? Go get lost if you want!</p>
    </main>
  );
}

export default Main;
