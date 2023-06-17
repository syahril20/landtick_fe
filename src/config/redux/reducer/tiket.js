import * as tiket from "../constant/tiket";

const TIKET_STATE = {
  error: null,
  tiket: [],
  loading: false,
};

export const tiketReducer = (state = TIKET_STATE, action) => {
  const { type, payload } = action;
  switch (type) {
    case tiket.GET_TIKET:
      return { ...state, loading: true };
    case tiket.GET_TIKET_SUCCESS:
      return { ...state, loading: false, tiket: payload, error: null };
    case tiket.GET_TIKET_FAILED:
      return { ...state, loading: false, error: payload };
    case tiket.ORDER:
      return { ...state, order: payload };
    default:
      return state;
  }
};
