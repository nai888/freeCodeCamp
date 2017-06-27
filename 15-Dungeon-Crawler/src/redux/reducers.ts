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
      if (action.direction) {
        return Object.assign({}, state, { location: state.location }); // Update this conditionally based on the direction
      } else {
        return state;
      }
    default:
      return state;
  }
}



function dealDamage(state: number = 10, action: { type: string, amount: number }) {
  switch (action.type) {
    case AT.DEAL_DAMAGE:
      return state - action.amount;
    default:
      return state;
  }
}

const rootReducer = combineReducers({
  player,
  dealDamage
});

export default rootReducer;
