import { createStore, applyMiddleware } from 'redux';
import thunk from 'redux-thunk';
import getRootReducer from './reducers';