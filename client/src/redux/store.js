import thunk from 'redux-thunk';
import { compose, createStore, applyMiddleware } from 'redux';
import { combineReducers } from 'redux';
import webReducer from './web/reducer';
import userReducer from './user/reducer';

//设置中间件
const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ ?
    window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__({}) : compose;
const enhancer = composeEnhancers(applyMiddleware(thunk));

const reducers = combineReducers({
    web: webReducer,
    user: userReducer,
});
const store = createStore(reducers, enhancer);
export default store;