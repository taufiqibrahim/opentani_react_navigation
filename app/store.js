import { createStore, applyMiddleware } from 'redux';
import thunk from 'redux-thunk';
import devToolsEnhancer from 'remote-redux-devtools';
import getRootReducer from './reducers';

export default function getStore(navReducer){
  const store = createStore(
    getRootReducer(navReducer),
    // undefined,
    // applyMiddleware(thunk),
    devToolsEnhancer()
  );
  return store;
}