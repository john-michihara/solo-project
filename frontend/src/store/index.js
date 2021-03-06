import { createStore, combineReducers, applyMiddleware, compose } from 'redux';
import thunk from 'redux-thunk';
import notebooksReducer from './notebooks';
import sessionReducer from './session';
import notesReducer from './notes';

const rootReducer = combineReducers({
  session: sessionReducer,
  notebooks: notebooksReducer,
  notes: notesReducer
});

// Enhancer will be set to different store enhancers depending on Node environment
let enhancer;

if (process.env.NODE_ENV === 'production') {
  enhancer = applyMiddleware(thunk);
} else {
  const logger = require('redux-logger').default;
  const composeEnhancers =
    window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;
  enhancer = composeEnhancers(applyMiddleware(thunk, logger));
}

const configureStore = (preloadedState) => {
  return createStore(rootReducer, preloadedState, enhancer);
};

export default configureStore;
