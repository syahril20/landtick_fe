import { createStore, applyMiddleware, compose } from "redux";
import logger from "redux-logger";
import { persistStore } from "redux-persist";
import thunk from "redux-thunk";
import reducer from "./reducer";

const middleWare = [thunk];

if (process.env.NODE_ENV === "development") {
  middleWare.push(logger);
}

const composeEnchancers = window._REDUX_DEVTOOLS_EXTENSION_COMPOSE_ || compose;

export const store = createStore(
  reducer,
  composeEnchancers(applyMiddleware(...middleWare))
);

export const persistor = persistStore(store)
