
import { createStore,applyMiddleware } from 'redux';
import thunk  from 'react-thunk';
import rootReducer from './reducers';

const initialState = {};

const middleware = [];


const store = createStore(rootReducer,initialState,applyMiddleware());

export default store;