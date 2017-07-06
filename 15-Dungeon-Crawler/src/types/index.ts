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

export interface enemy {
  id: number;
  health: number;
  damage: number;
  xpWorth: number;
  isBoss: boolean;
};

export interface enemyAction {
  type: string;
  id: number;
  damage?: number;
};

export type tileType = 'wall' | 'floor';

export type tokenType = 'player' | 'enemy' | 'boss' | 'health' | 'skill' | 'stairs';

export interface tile {
  tileType: tileType;
  token?: {
    tokenType: tokenType;
    id?: number;
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
};

export type direction = 'north' | 'south' | 'east' | 'west';

export interface gameStateAction {
  type: string;
  id?: number;
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
  enemies: enemy[];
  gameState: gameState;
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
  enemies: enemy[];
  gameState: gameState;
  log: string[];
};

export interface functionProps {
  onHeal: () => playerAction;
  onTakeDamage: (dmg: number) => playerAction;
  onDealDamage: (id: number, dmg: number) => enemyAction;
  onSkillsUp: () => playerAction;
  onPlayerDie: () => gameStateAction;
  onEnemyDie: (id: number, xp: number) => enemyAction;
  onLevelUp: () => playerAction;
  onBossDie: () => gameStateAction;
  onMove: (dir: direction) => gameStateAction;
  onNewGame: () => gameStateAction;
  onNewFloor: () => gameStateAction;
};
