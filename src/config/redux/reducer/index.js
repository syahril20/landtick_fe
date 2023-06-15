import { combineReducers } from "redux";
import { persistReducer } from "redux-persist";
import storage from "redux-persist/lib/storage";
import { authReducer } from "./auth";
import { keretaReducer } from "./kereta";
const persistConfig = {
  key: "root",
  storage,
  whitelist: ["auth","kereta"],
};

const reducer = combineReducers({
    auth : authReducer,
    kereta: keretaReducer
});

export default persistReducer(persistConfig, reducer);
