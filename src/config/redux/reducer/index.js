import { combineReducers } from "redux";
import { persistReducer } from "redux-persist";
import storage from "redux-persist/lib/storage";
import { authReducer } from "./auth";
import { tiketReducer } from "./tiket";
import { transaksiReducer } from "./transaksi";
import { userReducer } from "./user";
import { keretaReducer } from "./kereta";
const persistConfig = {
  key: "root",
  storage,
  whitelist: ["auth", "tiket", "transaksi", "user", "kereta"],
};

const reducer = combineReducers({
  auth: authReducer,
  tiket: tiketReducer,
  transaksi: transaksiReducer,
  user: userReducer,
  kereta: keretaReducer,
});

export default persistReducer(persistConfig, reducer);
