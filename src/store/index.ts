import { applyMiddleware, createStore } from "redux";
import createRootReducer from "./reducers";
import { createHashHistory } from "history";
import { routerMiddleware } from "connected-react-router";
import createSagaMiddleware from 'redux-saga'
import rootSage from "./sagas";
import { composeWithDevTools } from 'redux-devtools-extension'

export const history = createHashHistory()

const sageMiddleware = createSagaMiddleware();

const store = createStore(
  createRootReducer(history),
  composeWithDevTools(applyMiddleware(routerMiddleware(history), sageMiddleware))

);

sageMiddleware.run(rootSage);

export default store;