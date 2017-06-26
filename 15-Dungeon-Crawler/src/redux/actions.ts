import { HEAL, TAKEDAMAGE, DEALDAMAGE, WEAPON } from './actionTypes';

export function heal() {
  return {
    type: HEAL
  };
}

export function takeDamage(amount: number) {
  return {
    type: TAKEDAMAGE,
    amount
  };
}

export function dealDamage(amount: number) {
  return {
    type: DEALDAMAGE,
    amount
  };
}

export function upgradeWeapon() {
  return {
    type: WEAPON
  };
}
