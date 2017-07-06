import { combineReducers } from 'redux';
import * as AT from './actionTypes';
import * as t from '../types';
import store from './store';
import mapGenerator from './mapGenerator';

export const defaultPlayerState: t.player = {
  health: 100,
  xp: 0,
  nextXP: 100,
  level: 1,
  skill: 1
};

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
        skill: state.skill + 1,
        damage: 10 + (state.level * state.skill)
      });
    case AT.ENEMY_DIE:
      if (action.xpWorth) {
        return Object.assign({}, state, { xp: state.xp + action.xpWorth });
      } else {
        return Object.assign({}, state, { xp: state.xp + 1 });
      }
    case AT.LEVEL_UP:
      return Object.assign({}, state, {
        level: state.level + 1,
        damage: 10 + (state.level * state.skill)
      });
    case AT.NEW_GAME:
      return defaultPlayerState;  
    default:
      return state;
  }
}

export const defaultEnemyArray: t.enemy[] = [];

function enemy(state: t.enemy[] = defaultEnemyArray, action: t.enemyAction): t.enemy[] {
  switch (action.type) {
    case AT.DEAL_DAMAGE:
      let newState = [...state];
      for (let i = 0; i < newState.length; i++) {
        if (newState[i].id === action.id) {
          if (action.damage) {
            Object.assign({}, newState[i], { health: newState[i].health - action.damage });
          }
        }
      }
      return newState;
    case AT.ENEMY_DIE:
      for (let i = 0; i < state.length; i++) {
        if (state[i].id === action.id) {
          return state.splice(i, 1);
        }
      }
      return state;
    case AT.NEW_GAME:
      return defaultEnemyArray;
    default:
      return state;
  }
}

const defaultMap = mapGenerator(false);

export const defaultGameState: t.gameState = {
  playing: true,
  result: 'playing',
  map: defaultMap.map,
  playerLocation: defaultMap.playerLocation,
  floor: 1
};

function gameState(state: t.gameState = defaultGameState, action: t.gameStateAction): t.gameState {
  switch (action.type) {
    case AT.PLAYER_DIE:
      return Object.assign({}, state, { playing: false, result: 'lose' });
    case AT.BOSS_DIE:
      return Object.assign({}, state, { playing: false, result: 'win' });
    case AT.NEW_GAME:
      return Object.assign({}, defaultGameState, { map: mapGenerator(false) });
    case AT.MOVE:
      const playerLoc: t.coordinate = state.playerLocation;
      let newLoc: t.coordinate | undefined;
      let newMap: t.mapRow[] = state.map;
      const floorTile: t.tile = { tileType: 'floor' };
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
      let boss: boolean = store.getState().gameState.floor === 4 ? true : false;
      return Object.assign({}, state, { map: mapGenerator(boss), floor: state.floor + 1 });
    default:
      return state;
  }
}

export const openingLogMessage = ['Welcome to the dungeon, you rascally rogue!  The exits are locked! Each set of ' +
  'stairs will bring you deeper into the dungeon, but they will also lock behind you. Only the boss has the key. ' +
  'If you want to leave, you’ll need to get to the fourth floor and defeat the boss to get his key. Good luck!'];

function log(state: string[] = openingLogMessage, action: t.logAction) {
  switch (action.type) {
    case AT.DEAL_DAMAGE:
      let dealDamageMessage = `You dealt your foe ${action.amount} damage.`;
      return [dealDamageMessage, ...state];
    case AT.TAKE_DAMAGE:
      let takeDamageMessage = `Your foe dealt you ${action.amount} damage.`;
      return [takeDamageMessage, ...state];
    case AT.ENEMY_DIE:
      let enemyDieMessage = `You have vanquished your foe and gained ${action.xpWorth} experience points!`;
      return [enemyDieMessage, ...state];
    case AT.PLAYER_DIE:
      let playerDieMessage = 'You have died and your name shall dwindle into anonymity.';
      return [playerDieMessage, ...state];
    case AT.HEAL:
      let healMessage = 'You have healed 20 health points!';
      return [healMessage, ...state];
    case AT.SKILLS_UP:
      let skillsUpMessage = 'You spent a moment practicing, and your skills have increased!';
      return [skillsUpMessage, ...state];
    case AT.LEVEL_UP:
      let levelUpMessage = 'Your experience has taught you well; you have grown stronger!';
      return [levelUpMessage, ...state];
    case AT.BOSS_DIE:
      let bossDieMessage = 'You have vanquished the boss and conquered the dungeon. ' +
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
  enemy,
  gameState,
  log
});

export default rootReducer;
