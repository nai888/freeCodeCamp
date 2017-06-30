import { createStore } from 'redux';
import rootReducer from './reducers';
import { StateType } from './props';

const store = createStore<StateType>(rootReducer);

export default store;
