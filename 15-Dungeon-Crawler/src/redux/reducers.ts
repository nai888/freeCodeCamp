import { combineReducers } from 'redux';
import * as AT from './actionTypes';
import { StateType } from './props';

export interface Player {
  health: number;
  xp: number;
  nextXP: number;
  level: number;
  skill: number;
}

export const defaultPlayerState: Player = {
  health: 100,
  xp: 0,
  nextXP: 100,
  level: 1,
  skill: 1
};

export interface PlayerAction {
  type: string;
  amount?: number;
  xpWorth?: number;
}

function player(state: Player = defaultPlayerState, action: PlayerAction): Player {
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

export interface Enemy {
  id: number;
  health: number;
  damage: number;
  xpWorth: number;
  isBoss: boolean;
}

export const defaultEnemyArray: Enemy[] = [];

export interface EnemyAction {
  type: string;
  id: number;
  damage?: number;
}

function enemy(state: Enemy[] = defaultEnemyArray, action: EnemyAction): Enemy[] {
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

type TileType = 'wall' | 'floor' | 'empty';
type TokenType = 'player' | 'enemy' | 'boss';

export interface Tile {
  tileType: TileType;
  token?: {
    tokenType: TokenType;
    id?: number;
  };
}

export type MapRow = Tile[];

type resultType = 'playing' | 'win' | 'lose';

export interface GameState {
  playing: boolean;
  result: resultType;
  map: MapRow[];
  floor: number;
}

const genBlankMap = () => {
  let map: MapRow[] = [];
  let row: Tile[] = [];
  let blankTile: Tile = { tileType: 'empty' };
  for (let i = 0; i < 58; i++) {
    map[i] = row;
    for (let j = 0; j < 72; j++) {
      map[i][j] = blankTile;
    }
  }
  return map;
};

const blankMap = genBlankMap();

export const defaultGameState: GameState = {
  playing: true,
  result: 'playing',
  map: blankMap,
  floor: 1
};

type directionType = 'north' | 'south' | 'east' | 'west';

export interface GameStateAction {
  type: string;
  id?: number;
  direction?: directionType;
}

function gameState(state: GameState = defaultGameState, action: GameStateAction): GameState {
  switch (action.type) {
    case AT.PLAYER_DIE:
      return Object.assign({}, state, { playing: false, result: 'lose' });
    case AT.BOSS_DIE:
      return Object.assign({}, state, { playing: false, result: 'win' });
    case AT.NEW_GAME:
      return defaultGameState;  
    case AT.SETUP_MAP:
      return state; // Need to update this for generating a map; also call GEN_ENEMIES
    case AT.MOVE:
      // let locX = state.location.x;
      // let locY = state.location.y;
      switch (action.direction) {
        /* case 'north':
          return Object.assign({}, state, { location: { x: locX, y: locY + 1 } });
        case 'south':
          return Object.assign({}, state, { location: { x: locX, y: locY - 1 } });
        case 'west':
          return Object.assign({}, state, { location: { x: locX - 1, y: locY } });
        case 'east':
          return Object.assign({}, state, { location: { x: locX + 1, y: locY } }); */
        default:
          return state;
      }
    case AT.NEW_FLOOR:
      return Object.assign({}, state, { floor: state.floor + 1 }); // Also need to call SETUP_MAP and GEN_ENEMIES
    default:
      return state;
  }
}

export interface LogAction {
  type: string;
  amount?: number;
  damage?: number;
  xpWorth?: number;
  isBoss?: boolean;
}

export const openingLogMessage = ['Welcome to the dungeon, you rascally rogue! ' +
  'See if you can make it all the way to the fourth floor and beat the boss!'];

function log(state: string[] = openingLogMessage, action: LogAction) {
  switch (action.type) {
    case AT.DEAL_DAMAGE:
      let dealDamageMessage = `You dealt ${action.amount} damage.`;
      return [dealDamageMessage, ...state];
    case AT.TAKE_DAMAGE:
      let takeDamageMessage = `Enemy dealt you ${action.amount} damage.`;
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
      let levelUpMessage = 'Your experience has taught you well; you are getting stronger!';
      return [levelUpMessage, ...state];
    case AT.BOSS_DIE:
      let bossDieMessage = 'You have vanquished the boss and conquered the dungeon. The bards shall sing your name!';
      return [bossDieMessage, ...state];
    case AT.NEW_GAME:
      return openingLogMessage;
    default:
      return [...state];
  }
}

const rootReducer = combineReducers<StateType>({
  player,
  enemy,
  gameState,
  log
});

export default rootReducer;
