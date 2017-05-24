import { createStore, applyMiddleware } from 'redux';
import thunk from 'redux-thunk';
import devToolsEnhancer from 'remote-redux-devtools';
import rootReducer from './reducers';

export default function getStore(){
  const store = createStore(
    rootReducer,
    // undefined,
    // applyMiddleware(thunk),
    devToolsEnhancer()
  );
  return store;
}