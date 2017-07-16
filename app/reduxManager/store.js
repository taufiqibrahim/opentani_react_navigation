import { AsyncStorage } from 'react-native';
// import { createStore, applyMiddleware } from 'redux';
import { createStore, applyMiddleware, compose } from 'redux';
import thunk from 'redux-thunk';
//import devToolsEnhancer from 'remote-redux-devtools';
import { composeWithDevTools } from 'remote-redux-devtools';
import { persistStore, autoRehydrate } from 'redux-persist';
import rootReducer from './reducers';


/*export default function getStore(){
  const store = createStore(
    rootReducer,
    // undefined,
    // applyMiddleware(thunk),
    devToolsEnhancer()
  );
  return store;
}*/

/*export default function getStore(){
  const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;
  const store = createStore(
    rootReducer,
    composeEnhancers(
      applyMiddleware(thunk)
    )
  );
  return store;
}*/

export default function getStore() {
  const store = createStore(
    rootReducer,
    composeWithDevTools(
      applyMiddleware(thunk),
      autoRehydrate(),
    )
  );

  // Begin persisting the store
  persistStore(store, {
    whitelist: ['userState'],
    storage: AsyncStorage,
  })

  return store;
}