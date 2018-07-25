import { createStore,  combineReducers } from 'redux';
import { composeWithDevTools } from 'redux-devtools-extension';

const rootReducer = combineReducers({

})

const store = createStore(rootReducer, composeWithDevTools(
    //   applyMiddleware(...middleware),
      // other store enhancers if any
    ));

export default store;