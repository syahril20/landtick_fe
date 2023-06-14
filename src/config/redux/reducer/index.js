import { combineReducers } from "redux";
import { persistReducer } from "redux-persist";
import storage from "redux-persist/lib/storage";
import { authReducer } from "./auth";
const persistConfig = {
  key: "root",
  storage,
  whitelist: ["auth"],
};

const reducer = combineReducers({
    auth : authReducer
});

export default persistReducer(persistConfig, reducer);
