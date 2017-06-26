import { combineReducers } from 'redux';
import { HEAL, TAKEDAMAGE, DEALDAMAGE, WEAPON } from './actionTypes';
// import { heal, takeDamage, dealDamage, upgradeWeapon } from './actions';

function heal(state: number = 20, action: { type: string }) {
  switch (action.type) {
    case HEAL:
      return state + 10;
    default:
      return state;
  }
}

function takeDamage(state: number = 20, action: { type: string, amount: number }) {
  switch (action.type) {
    case TAKEDAMAGE:
      return state - action.amount;
    default:
      return state;  
  }
}

function dealDamage(state: number = 10, action: { type: string, amount: number }) {
  switch (action.type) {
    case DEALDAMAGE:
      return state - action.amount;
    default:
      return state;
  }
}

function upgrade(state: number = 1, action: { type: string }) {
  switch (action.type) {
    case WEAPON:
      return state + 1;
    default:
      return state;
  }
}

const rootReducer = combineReducers({
  heal,
  takeDamage,
  dealDamage,
  upgrade
});

export default rootReducer;
