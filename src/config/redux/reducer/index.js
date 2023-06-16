import { combineReducers } from "redux";
import { persistReducer } from "redux-persist";
import storage from "redux-persist/lib/storage";
import { authReducer } from "./auth";
import { keretaReducer } from "./kereta";
import { transaksiReducer } from "./transaksi";
const persistConfig = {
  key: "root",
  storage,
  whitelist: ["auth","kereta","transaksi"],
};

const reducer = combineReducers({
    auth : authReducer,
    kereta: keretaReducer,
    transaksi: transaksiReducer
});

export default persistReducer(persistConfig, reducer);
