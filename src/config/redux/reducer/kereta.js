import * as kereta from "../constant/kereta";

const KERETA_STATE = {
  error: null,
  kereta: [],
  loading: false,
};

export const keretaReducer = (state = KERETA_STATE, action) => {
  const { type, payload } = action;
  switch (type) {
    case kereta.GET_KERETA:
      return { ...state, loading: true };
    case kereta.GET_KERETA_SUCCESS:
      return { ...state, loading: false, kereta: payload, error: null };
    case kereta.GET_KERETA_FAILED:
      return { ...state, loading: false, error: payload };
    default:
      return state;
  }
};
