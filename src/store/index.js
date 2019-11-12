import { createStore, combineReducers, applyMiddleware } from 'redux';
import createSagaMiddleware from 'redux-saga'
import logger from 'redux-logger'

import newsReducer from './modules/news';
import topNewsReducer from './modules/topNews';
import rootSaga from './sagas'

let rootReducer = combineReducers({ news: newsReducer, topNews: topNewsReducer });
const sagaMiddleware = createSagaMiddleware()
const middleware = [sagaMiddleware, logger]
let store = createStore(rootReducer, {}, applyMiddleware(...middleware));
sagaMiddleware.run(rootSaga);

export default store;
