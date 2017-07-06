import { createStore } from 'redux';
import rootReducer from './reducers';
import * as t from '../types';

const store = createStore<t.stateType>(rootReducer);

export default store;
