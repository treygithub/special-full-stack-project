// import { createStore, combineReducers } from "redux";

// const rootReducer = combineReducers({

// })

// const store = createStore(
// rootReducer,
// window.__REDUX_DEVTOOLS_EXTENSION__ / window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__()
// );

// export default store;



import { createStore, applyMiddleware } from 'redux';
import { composeWithDevTools } from 'redux-devtools-extension';

const store = createStore(rootReducer, composeWithDevTools(
  applyMiddleware(...middleware),
  // other store enhancers if any
));
export default store;