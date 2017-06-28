import { combineReducers } from 'redux';
import * as AT from './actionTypes';

interface Player {
  health: number;
  xp: number;
  level: number;
  weapon: number;
  damage: number;
  location: number[];
}

const defaultPlayerState: Player = {
  health: 20,
  xp: 0,
  level: 1,
  weapon: 1,
  damage: 11, // 10 + (level * weapon)
  location: [0, 0] // [x, y]
};

interface PlayerAction {
  type: string;
  amount?: number;
  xpWorth?: number;
  direction?: string;
}

function player(state: Player = defaultPlayerState, action: PlayerAction) {
  switch (action.type) {
    case AT.HEAL:
      return Object.assign({}, state, { health: state.health + 10 });
    case AT.TAKE_DAMAGE:
      if (action.amount) {
        return Object.assign({}, state, { health: state.health - action.amount });
      } else {
        return Object.assign({}, state, { health: state.health - 1 });
      }
    case AT.WEAPON:
      return Object.assign({}, state, {
        weapon: state.weapon + 1,
        damage: 10 + (state.level * state.weapon)
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
        damage: 10 + (state.level * state.weapon)
      });
    case AT.MOVE:
      switch (action.direction) {
        case "north":
          return Object.assign({}, state, { location: [state.location[0], state.location[1] + 1] });
        case "south":
          return Object.assign({}, state, { location: [state.location[0], state.location[1] - 1] });
        case "west":
          return Object.assign({}, state, { location: [state.location[0] - 1, state.location[1]] });
        case "east":
          return Object.assign({}, state, { location: [state.location[0] + 1, state.location[1]] });
        default:
          return state;  
      }
    case AT.NEW_GAME:
      return defaultPlayerState;  
    default:
      return state;
  }
}

interface Enemy {
  id: number;
  health: number;
  damage: number;
  xpWorth: number;
  isBoss: boolean;
}

interface EnemyAction {
  type: string;
  id: number;
  damage?: number;
}

function enemy(state: Enemy[] = [], action: EnemyAction) {
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
    case AT.NEW_GAME:
      let blankState: Enemy[] = [];
      return blankState;
    default:
      return state;
  }
}

interface GameState {
  playing: boolean;
  result: string;
}

const defaultGameState: GameState = {
  playing: true,
  result: "playing"
}

function gameState(state: GameState = defaultGameState, action: { type: string }) {
  switch (action.type) {
    case AT.PLAYER_DIE:
      return Object.assign({}, state, { playing: false, result: "lose" });
    case AT.BOSS_DIE:
      return Object.assign({}, state, { playing: false, result: "win" });
    case AT.NEW_GAME:
      return defaultGameState;  
    default:
      return state;  
  }
}

const rootReducer = combineReducers({
  player,
  enemy,
  gameState
});

export default rootReducer;
