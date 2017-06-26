import { createStore } from 'redux';
import rootReducer from './reducers';

const defaultState: object = {
  player: {
    health: 20,
    weapon: 1
  },
  level: 1
};

const store = createStore(rootReducer, defaultState);

export default store;
