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
    enemies: red.defaultEnemyArray,
    gameState: red.defaultGameState,
    log: red.openingLogMessage
  };

  componentDidMount() {
    document.addEventListener('keydown', this, false);
  }

  componentWillUnmount() {
    document.removeEventListener('keydown', this, false);
  }

  handleEvent = (e: KeyboardEvent) => {
    this.handleKeyDown(e);
  }

  handleKeyDown = (e: KeyboardEvent) => {
    e.preventDefault();
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
        let newLocTile: t.tile = map[newLoc.y][newLoc.x];
        if (newLocTile.tileType === 'floor') {
          if (newLocTile.token !== undefined) {
            switch (newLocTile.token.tokenType) {
              case 'enemy':
                // Deal damage
                // Take damage
                // Check if player died, if so lose
                // Check if enemy died, if so add XP
                // If added XP enough to level up, if so do so
                break;
              case 'boss':
                // Deal damage
                // Take damage
                // Check if player died, if so lose
                // Check if boss died, if so win
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
  }

  render() {
    const { ...props } = this.props;

    return (
      <main onKeyPress={(e) => this.handleKeyDown} >
        <StatusBar
          player={props.player}
          enemies={props.enemies}
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
