import * as transaksi from "../constant/transaksi";

const TRANSAKSI_STATE = {
  error: null,
  transaksi: [],
  loading: false,
};

export const transaksiReducer = (state = TRANSAKSI_STATE, action) => {
  const { type, payload } = action;
  switch (type) {
    case transaksi.GET_TRANSAKSI:
      return { ...state, loading: true };
    case transaksi.GET_TRANSAKSI_SUCCESS:
      return { ...state, loading: false, transaksi: payload, error: null };
    case transaksi.GET_TRANSAKSI_FAILED:
      return { ...state, loading: false, error: payload };
    default:
      return state;
  }
};
