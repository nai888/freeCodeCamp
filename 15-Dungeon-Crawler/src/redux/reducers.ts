import { combineReducers } from 'redux';
import { HEAL, TAKEDAMAGE, DEALDAMAGE, WEAPON } from './actionTypes';
import { heal, takeDamage, dealDamage, upgradeWeapon } from './actions';

function health(state: number, action: object) {
  switch (action.type) {
    case HEAL:
      return state + 10;
    case TAKEDAMAGE:
      return state - action.amount;
    default:
      return state;
  }
}

function damage(state: number, action: object) {
  switch (action.type) {
    case DEALDAMAGE:
      return state - action.amount;
    default:
      return state;
  }
}

function upgrade(state: number, action: object) {
  switch (action.type) {
    case WEAPON:
      return state + 1;
    default:
      return state;
  }
}

const rootReducer = combineReducers({
  health,
  damage,
  upgrade
});

export default rootReducer;
