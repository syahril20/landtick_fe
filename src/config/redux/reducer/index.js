import { combineReducers } from "redux";
import { persistReducer } from "redux-persist";
import storage from "redux-persist/lib/storage";
import { authReducer } from "./auth";
import { tiketReducer } from "./tiket";
import { transaksiReducer } from "./transaksi";
import { userReducer } from "./user";
const persistConfig = {
  key: "root",
  storage,
  whitelist: ["auth", "tiket", "transaksi", "user"],
};

const reducer = combineReducers({
  auth: authReducer,
  tiket: tiketReducer,
  transaksi: transaksiReducer,
  user: userReducer
});

export default persistReducer(persistConfig, reducer);
