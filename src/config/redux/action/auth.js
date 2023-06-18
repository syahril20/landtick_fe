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
        Swal.fire({
          title: "Login Success",
          className: "swal2-container",
        });
        dispatch(loginSuccess(response?.data?.data));
        setTimeout(() => {
          window.location.reload();
        }, 1000);
      })
      .catch((error) => {
        const Toast = Swal.mixin({
          toast: true,
          position: "top-end",
          showConfirmButton: false,
          timer: 3000,
          timerProgressBar: true,
          didOpen: (toast) => {
            toast.addEventListener("mouseenter", Swal.stopTimer);
            toast.addEventListener("mouseleave", Swal.resumeTimer);
          },
        });

        Toast.fire({
          icon: "warning",
          title: "Email Atau Password Salah",
          className: "swal2-container",
        });
        dispatch(loginFaied(error?.response?.data?.message));
      });
  };
};

const register = () => ({
  type: auth.REGISTER,
});
const registerSuccess = (data) => ({
  type: auth.REGISTER_SUCCESS,
  payload: data,
});
const registerFaied = (error) => ({
  type: auth.REGISTER_FAILED,
  payload: error,
});

export const registerFunc = (dataRegister) => {
  return function (dispatch) {
    dispatch(register());
    API.post("/register", dataRegister)
      .then((response) => {
        Swal.fire("SUKSES");
        dispatch(registerSuccess(response?.data?.data));
      })
      .catch((error) => {
        alert(error.response?.data?.message);
        dispatch(registerFaied(error.response?.data?.message));
      });
  };
};
