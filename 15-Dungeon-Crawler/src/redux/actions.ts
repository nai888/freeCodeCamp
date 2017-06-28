import * as AT from './actionTypes';

export const heal = () => {
  return {
    type: AT.HEAL
  };
}

export const takeDamage = (amount: number) => {
  return {
    type: AT.TAKE_DAMAGE,
    amount
  };
}

export const dealDamage = (id: number, amount: number) => {
  return {
    type: AT.DEAL_DAMAGE,
    id,
    amount
  };
}

export const upgradeWeapon = () => {
  return {
    type: AT.WEAPON
  };
}

export const playerDie = () => {
  return {
    type: AT.PLAYER_DIE
  };
}

export const enemyDie = (xpWorth: number) => {
  return {
    type: AT.ENEMY_DIE,
    xpWorth
  };
}

export const levelUp = () => {
  return {
    type: AT.LEVEL_UP
  };
}

export const bossDie = () => {
  return {
    type: AT.BOSS_DIE
  };
}

export const setupMap = (floor: number) => {
  return {
    type: AT.SETUP_MAP,
    floor
  };
}

export const genEnemies = () => {
  return {
    type: AT.GEN_ENEMIES
  };
}

export const move = (direction: string) => {
  return {
    type: AT.GEN_ENEMIES,
    direction
  };
}

export const newGame = () => {
  return {
    type: AT.NEW_GAME
  };
}
