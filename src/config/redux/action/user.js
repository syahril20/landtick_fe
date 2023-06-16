import { API } from "../../api/api";
import * as user from "../constant/user";
const getUser = () => ({
  type: user.GET_USER,
});
const getUserSuccess = (data) => ({
  type: user.GET_USER_SUCCESS,
  payload: data,
});
const getUserFailed = (error) => ({
  type: user.GET_USER_FAILED,
  payload: error,
});

export const userFunc = (token) => {
  return function (dispatch) {
    dispatch(getUser());
    console.log(token, "INI KONTOL");
    let config = {
      headers: {
        Authorization: `Bearer ${token}`
      }
    }
    API.get("/users", config)
      .then((response) => {
        dispatch(getUserSuccess(response.data.data));
      })
      .catch((error) => {
        dispatch(getUserFailed(error.response.data.message));
      });
  };
};
