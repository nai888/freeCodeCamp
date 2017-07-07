import * as React from 'react';
import { connect } from 'react-redux';
// import { returntypeof } from 'react-redux-typescript';
import mapStateToProps from '../redux/props';
import mapDispatchToProps from '../redux/dispatcher';
import * as t from '../types';
import * as red from '../redux/reducers';
import StatusBar from './StatusBar';
import Map from './Map';
import Log from './Log';
import './Main.css';

class Main extends React.Component<t.stateType & t.dispatchProps, t.stateType> {
  static defaultProps: Partial<t.stateType & t.dispatchProps> = {
    player: red.defaultPlayerState,
    gameState: red.defaultGameState,
    log: red.openingLogMessage
  };

  componentDidMount(): void {
    document.addEventListener('keydown', this, false);
  }

  componentWillUnmount(): void {
    document.removeEventListener('keydown', this, false);
  }

  handleEvent: (e: KeyboardEvent) => void = (e) => {
    if (this.props.gameState.playing) {
      this.handleKeyDown(e);
    }
  }

  handleKeyDown: (e: KeyboardEvent) => void = (e) => {
    let dir: t.direction | undefined;
    switch (e.which) {
      case 37: // left arrow
        dir = 'west';
        break;
      case 65: // a
        dir = 'west';
        break;
      case 100: // numpad 4
        dir = 'west';
        break;
      case 38: // up arrow
        dir = 'north';
        break;
      case 87: // w
        dir = 'north';
        break;
      case 104: // numpad 8
        dir = 'north';
        break;
      case 39: // right arrow
        dir = 'east';
        break;
      case 68: // d
        dir = 'east';
        break;
      case 102: // numpad 6
        dir = 'east';
        break;
      case 40: // down arrow
        dir = 'south';
        break;
      case 83: // s
        dir = 'south';
        break;
      case 98: // numpad 2
        dir = 'south';
        break;
      default:
        dir = undefined;
    }
    if (dir !== undefined) {
      e.preventDefault();
      this.handleDirection(dir);
    }
  }

  // Eventually, we could add a function to handle swipes for mobile

  handleDirection: (dir: t.direction) => void = (dir) => {
    let newLoc: t.coordinate | undefined;
    const map: t.mapRow[] = this.props.gameState.map;
    const playerLoc: t.coordinate = this.props.gameState.playerLocation;
    switch (dir) {
      case 'west':
        newLoc = { x: playerLoc.x - 1, y: playerLoc.y };
        break;
      case 'north':
        newLoc = { x: playerLoc.x, y: playerLoc.y - 1 };
        break;
      case 'east':
        newLoc = { x: playerLoc.x + 1, y: playerLoc.y };
        break;
      case 'south':
        newLoc = { x: playerLoc.x, y: playerLoc.y + 1 };
        break;
      default:
        newLoc = undefined;
    }
    if (newLoc !== undefined) {
      const newLocTile: t.tile = map[newLoc.y][newLoc.x];
      if (newLocTile.tileType === 'floor') {
        if (newLocTile.token !== undefined) {
          const rollDamage: (toEnemy: boolean, i?: t.enemy) => number = (toEnemy, i) => {
            const lvl: number = this.props.player.level;
            const skl: number = this.props.player.skill;
            let dmg: number = 0;
            if (i !== undefined && i.token !== undefined && i.token.damage !== undefined) {
              dmg = i.token.damage;
            }
            if (toEnemy) {
              return Math.floor(Math.random() * (4 + lvl)) + skl + 1;
            } else {
              return Math.floor(Math.random() * (4 + lvl)) + dmg + 1;
            }
          };
          switch (newLocTile.token.tokenType) {
            case 'enemy' || 'boss':
              const token = newLocTile.token;
              if (token.id !== undefined) {
                // Player attacks enemy
                this.props.onDealDamage(token.id, rollDamage(true));
                // Enemy attacks player
                this.props.onTakeDamage(rollDamage(false, newLocTile));
                // If player died, lose
                if (this.props.player.health <= 0) {
                  this.props.onPlayerDie();
                }
                // Check if enemy died
                if (token.health !== undefined && token.health <= 0) {
                  // If boss died, win
                  if (token.tokenType === 'boss') {
                    this.props.onBossDie();
                  } else {
                    // If non-boss enemy died, add XP
                    if (token.xpWorth !== undefined) {
                      this.props.onEnemyDie(token.id, token.xpWorth);
                    }
                    // If added XP enough to level up, if so do so
                    if (this.props.player.xp >= this.props.player.nextXP) {
                      this.props.onLevelUp();
                    }
                  }
                }
              }
              break;
            case 'health':
              this.props.onMove(dir);
              this.props.onHeal();
              break;
            case 'skill':
              this.props.onMove(dir);
              this.props.onSkillsUp();
              break;
            case 'stairs':
              this.props.onMove(dir);
              this.props.onNewFloor();
              break;
            default:
              break;
          }
        } else {
          this.props.onMove(dir);
        }
      }
    }
  }

  render(): JSX.Element {
    const { ...props } = this.props;

    return (
      <main onKeyPress={(e) => this.handleKeyDown} >
        <StatusBar
          player={props.player}
          gameState={props.gameState}
        />
        <Map map={props.gameState.map} />
        <Log
          log={props.log}
          gameState={props.gameState}
          onNewGame={props.onNewGame}
        />
      </main>
    );
  }
}

const ConnectedMain = connect(mapStateToProps, mapDispatchToProps)(Main as any) as React.ComponentClass;

export default ConnectedMain;
