import * as user from "../constant/user";
import * as auth from "../constant/auth";

const USER_STATE = {
  error: null,
  user: [],
  loading: false,
};

export const userReducer = (state = USER_STATE, action) => {
  const { type, payload } = action;
  switch (type) {
    case user.GET_USER:
      return { ...state, loading: true };
    case user.GET_USER_SUCCESS:
      return { ...state, loading: false, user: payload, error: null };
    case user.GET_USER_FAILED:
      return { ...state, loading: false, error: payload };
    case auth.LOGOUT:
      return { ...state, loading: null, user: null, error: null };
    default:
      return state;
  }
};
