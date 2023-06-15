import * as auth from "../constant/auth";
import { API } from "../../api/api";
import Swal from "sweetalert2";
const login = () => ({
  type: auth.LOGIN,
});
const loginSuccess = (data) => ({
  type: auth.LOGIN_SUCCESS,
  payload: data,
});
const loginFaied = (error) => ({
  type: auth.LOGIN_FAILED,
  payload: error,
});

const logout = () => ({
  type: auth.LOGOUT,
});

export const logoutFunc = () => {
  return function (dispatch) {
    dispatch(logout());
    Swal.fire("LOGOUT SUKSES");
  };
};
export const loginFunc = (dataLogin) => {
  return function (dispatch) {
    dispatch(login());
    API.post("/login", dataLogin)
      .then((response) => {
        Swal.fire("SUKSES");
        dispatch(loginSuccess(response.data.data));
      })
      .catch((error) => {
        alert("email atau password salah!");
        dispatch(loginFaied(error.response.data.message));
      });
  };
};
