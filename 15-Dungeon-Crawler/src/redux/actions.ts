import * as AT from './actionTypes';
import * as t from '../types';

export const heal = () => {
  return {
    type: AT.HEAL
  };
};

export const takeDamage = (amount: number) => {
  return {
    type: AT.TAKE_DAMAGE,
    amount
  };
};

export const dealDamage = (id: number, amount: number) => {
  return {
    type: AT.DEAL_DAMAGE,
    id,
    amount
  };
};

export const skillsUp = () => {
  return {
    type: AT.SKILLS_UP
  };
};

export const playerDie = () => {
  return {
    type: AT.PLAYER_DIE
  };
};

export const enemyDie = (id: number, xpWorth: number) => {
  return {
    type: AT.ENEMY_DIE,
    id,
    xpWorth
  };
};

export const levelUp = () => {
  return {
    type: AT.LEVEL_UP
  };
};

export const bossDie = () => {
  return {
    type: AT.BOSS_DIE
  };
};

export const move = (direction: t.direction) => {
  return {
    type: AT.MOVE,
    direction
  };
};

export const newGame = () => {
  return {
    type: AT.NEW_GAME
  };
};

export const newFloor = () => {
  return {
    type: AT.NEW_FLOOR
  };
};

export const fog = () => {
  return {
    type: AT.FOG
  };
};
