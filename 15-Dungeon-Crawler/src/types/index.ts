export interface player {
  health: number;
  xp: number;
  nextXP: number;
  level: number;
  skill: number;
};

export interface playerAction {
  type: string;
  amount?: number;
  id?: number;
  xpWorth?: number;
};

export interface enemy extends tile {};

export type tileType = 'wall' | 'floor';

export type tokenType = 'player' | 'enemy' | 'boss' | 'health' | 'skill' | 'stairs';

export interface tile {
  tileType: tileType;
  foggy: boolean;
  token?: {
    tokenType: tokenType;
    id?: number;
    health?: number;
    damage?: number;
    xpWorth?: number;
  };
};

export type mapRow = tile[];

export type resultType = 'playing' | 'win' | 'lose';

export type coordinate = {
  x: number,
  y: number
};

export interface gameState {
  playing: boolean;
  result: resultType;
  map: mapRow[];
  playerLocation: coordinate;
  floor: number;
  fog: boolean;
};

export type direction = 'north' | 'south' | 'east' | 'west';

export interface gameStateAction {
  type: string;
  id?: number;
  amount?: number;
  direction?: direction;
};

export interface logAction {
  type: string;
  amount?: number;
  xpWorth?: number;
};

export interface tileProps extends tile {
  row: number;
  col: number;
};

export interface statusBarProps {
  player: player;
  gameState: gameState;
  toggleFog: () => gameStateAction;
};

export interface rowProps {
  row: mapRow;
  rowNum: number;
};

export interface mapProps {
  map: mapRow[];
};

export interface logProps {
  log: string[];
  gameState: gameState;
  onNewGame: () => gameStateAction;
};

export interface stateType {
  player: player;
  gameState: gameState;
  log: string[];
};

export interface dispatchProps {
  onHeal: () => playerAction;
  onTakeDamage: (dmg: number) => playerAction;
  onDealDamage: (id: number, dmg: number) => gameStateAction;
  onSkillsUp: () => playerAction;
  onPlayerDie: () => gameStateAction;
  onEnemyDie: (id: number, xp: number) => gameStateAction;
  onLevelUp: () => playerAction;
  onBossDie: () => gameStateAction;
  onMove: (dir: direction) => gameStateAction;
  onNewGame: () => gameStateAction;
  onNewFloor: () => gameStateAction;
  onFog: () => gameStateAction;
};
