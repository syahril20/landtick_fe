import * as auth from "../constant/auth";

const AUTH_STATE = {
  error: null,
  user: [],
  token: null,
  loading: false,
};

export const authReducer = (state = AUTH_STATE, action) => {
  const { type, payload } = action;
  switch (type) {
    case auth.LOGIN:
      return { ...state, loading: true };
    case auth.LOGIN_SUCCESS:
      return { ...state, loading: false, user: payload, error: null };
    case auth.LOGIN_FAILED:
      return { ...state, loading: false, error: payload };
    case auth.LOGOUT:
      return { ...state, loading: null, user: null, token: null, error: null };
    default:
      return state;
  }
};
