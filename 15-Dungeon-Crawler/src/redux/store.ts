import { createStore } from 'redux';
import rootReducer, { Player, Enemy, GameState } from './reducers';

interface StoreType {
  player: Player;
  enemy: Enemy[];
  gameState: GameState;
}

const store = createStore<StoreType>(rootReducer);

export default store;
