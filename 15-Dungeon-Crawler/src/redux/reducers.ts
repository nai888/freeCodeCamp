import { combineReducers } from 'redux';
import * as AT from './actionTypes';
import * as t from '../types';
import mapGenerator from './mapGenerator';

export const defaultPlayerState: t.player = {
  health: 100,
  xp: 0,
  nextXP: 100,
  level: 1,
  skill: 0
};

const defaultMap = mapGenerator(1);

export const defaultGameState: t.gameState = {
  playing: true,
  result: 'playing',
  map: defaultMap.map,
  playerLocation: defaultMap.playerLocation,
  floor: 1
};

export const openingLogMessage = ['Welcome to the dungeon, you rascally rogue!  The exits are locked! Each set of ' +
  'stairs will bring you deeper into the dungeon, but they will also lock behind you. Only the boss has the key. ' +
  'If you want to leave, you’ll need to get to the fourth floor and defeat the boss to get his key. Good luck!'];

function player(state: t.player = defaultPlayerState, action: t.playerAction): t.player {
  switch (action.type) {
    case AT.HEAL:
      return Object.assign({}, state, { health: state.health + 10 });
    case AT.TAKE_DAMAGE:
      if (action.amount) {
        return Object.assign({}, state, { health: state.health - action.amount });
      } else {
        return Object.assign({}, state, { health: state.health - 1 });
      }
    case AT.SKILLS_UP:
      return Object.assign({}, state, {
        skill: state.skill + 1
      });
    case AT.ENEMY_DIE:
      if (action.xpWorth) {
        return Object.assign({}, state, { xp: state.xp + action.xpWorth });
      } else {
        return Object.assign({}, state, { xp: state.xp + 1 });
      }
    case AT.LEVEL_UP:
      let next = state.nextXP + 100;
      next += Math.floor(next / 100) * 10;
      return Object.assign({}, state, {
        level: state.level + 1,
        nextXP: next
      });
    case AT.NEW_GAME:
      return defaultPlayerState;  
    default:
      return state;
  }
}

function gameState(state: t.gameState = defaultGameState, action: t.gameStateAction): t.gameState {
  const floorTile: t.tile = { tileType: 'floor' };
  switch (action.type) {
    case AT.DEAL_DAMAGE:
      const i = state.map.findIndex(function (row: t.mapRow) {
        let found: boolean = false;
        for (let j = 0; j < row.length; j++) {
          let tile = row[j];
          if (tile.token !== undefined) {
            if (tile.token.id === action.id) {
              found = true;
            }
          }
        }
        return found;
      });
      let j: number = -1;
      if (i !== undefined) {
        j = state.map[i].findIndex(function (tile: t.tile) {
          let found: boolean = false;
          if (tile.token !== undefined && tile.token.id === action.id) {
            found = true;
          }
          return found;
        });
      }
      const newEnemiesMap = state.map;
      if (j > -1) {
        const tile = newEnemiesMap[i][j];
        if (tile.token !== undefined) {
          if (tile.token.id === action.id) {
            const enemyType = tile.token.id === 0 ? 'boss' : 'enemy';
            if (tile.token.health !== undefined && action.amount !== undefined) {
              let hurtEnemy: t.tile = {
                tileType: 'floor',
                token: {
                  tokenType: enemyType,
                  id: tile.token.id,
                  health: tile.token.health - action.amount,
                  damage: tile.token.damage,
                  xpWorth: tile.token.xpWorth
                }
              };
              newEnemiesMap[i].splice(j, 1, hurtEnemy);
            }
          }
        }
      }
      return Object.assign({}, state, { map: newEnemiesMap });
    case AT.ENEMY_DIE:
      for (let k = 0; k < state.map.length; k++) {
        for (let l = 0; l < state.map[k].length; l++) {
          const newMap: t.mapRow[] = state.map;
          const tile = newMap[k][l];
          if (tile !== undefined && tile.token !== undefined) {
            if (action.id === tile.token.id) {
              newMap[k].splice(l, 1, floorTile);
              return Object.assign({}, state, { map: newMap });
            }
          }
        }
      }
      return state;
    case AT.PLAYER_DIE:
      return Object.assign({}, state, { playing: false, result: 'lose' });
    case AT.BOSS_DIE:
      return Object.assign({}, state, { playing: false, result: 'win' });
    case AT.NEW_GAME:
      const newGameMap = mapGenerator(1);
      return Object.assign({}, defaultGameState, { map: newGameMap.map, playerLocation: newGameMap.playerLocation });
    case AT.MOVE:
      const playerLoc: t.coordinate = state.playerLocation;
      let newLoc: t.coordinate | undefined;
      let newMap: t.mapRow[] = state.map;
      const playerTile: t.tile = { tileType: 'floor', token: { tokenType: 'player' } };
      switch (action.direction) {
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
        newMap[playerLoc.y].splice(playerLoc.x, 1, floorTile);
        newMap[newLoc.y].splice(newLoc.x, 1, playerTile);
        return Object.assign({}, state, { map: newMap, playerLocation: newLoc });
      } else {
        return state;
      }
    case AT.NEW_FLOOR:
      let newFloor = state.floor + 1;
      const newFloorMap = mapGenerator(newFloor);
      return Object.assign({}, state, {
        map: newFloorMap.map,
        playerLocation: newFloorMap.playerLocation,
        floor: newFloor
      });
    default:
      return state;
  }
}

function log(state: string[] = openingLogMessage, action: t.logAction) {
  switch (action.type) {
    case AT.DEAL_DAMAGE:
      const dealDamageMessage = `You dealt your foe ${action.amount} damage.`;
      return [dealDamageMessage, ...state];
    case AT.TAKE_DAMAGE:
      const takeDamageMessage = `Your foe dealt you ${action.amount} damage.`;
      return [takeDamageMessage, ...state];
    case AT.ENEMY_DIE:
      const enemyDieMessage = `You have vanquished your foe and gained ${action.xpWorth} experience points!`;
      return [enemyDieMessage, ...state];
    case AT.PLAYER_DIE:
      const playerDieMessage = 'You have died and your name shall dwindle into anonymity.';
      return [playerDieMessage, ...state];
    case AT.HEAL:
      const healMessage = 'You have healed 10 health points!';
      return [healMessage, ...state];
    case AT.SKILLS_UP:
      const skillsUpMessage = 'You spent a moment practicing, and your skills have increased!';
      return [skillsUpMessage, ...state];
    case AT.LEVEL_UP:
      const levelUpMessage = 'Your experience has taught you well; you have grown stronger!';
      return [levelUpMessage, ...state];
    case AT.NEW_FLOOR:
      const newFloorMessage = 'You have delved deeper into the dungeon. The door locked behind you.';
      return [newFloorMessage, ...state];
    case AT.BOSS_DIE:
      const bossDieMessage = 'You have vanquished the boss and conquered the dungeon. ' +
        'The bards shall sing of your glory!';
      return [bossDieMessage, ...state];
    case AT.NEW_GAME:
      return openingLogMessage;
    default:
      return [...state];
  }
}

const rootReducer = combineReducers<t.stateType>({
  player,
  gameState,
  log
});

export default rootReducer;
