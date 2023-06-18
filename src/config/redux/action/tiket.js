import * as tiket from "../constant/tiket";
import { API } from "../../api/api";
import Swal from "sweetalert2";
const getTiket = () => ({
  type: tiket.GET_TIKET,
});
const getTiketSuccess = (data) => ({
  type: tiket.GET_TIKET_SUCCESS,
  payload: data,
});
const getTiketFailed = (error) => ({
  type: tiket.GET_TIKET_FAILED,
  payload: error,
});

export const getTiketFunc = () => {
  return function (dispatch) {
    dispatch(getTiket());
    API.get("/tiket")
      .then((response) => {
        dispatch(getTiketSuccess(response?.data?.data));
      })
      .catch((error) => {
        dispatch(getTiketFailed(error?.response?.data?.message));
      });
  };
};

const addTiket = () => ({
  type: tiket.TIKET,
});
const addTiketSuccess = (data) => ({
  type: tiket.TIKET_SUCCESS,
  payload: data,
});
const addTiketFaied = (error) => ({
  type: tiket.TIKET_FAILED,
  payload: error,
});

export const addTiketFunc = (dataTiket, token) => {
  return function (dispatch) {
    dispatch(addTiket());
    console.log(dataTiket, token, "INI ANJAY");
    let config = {
      headers: {
        Authorization: `Bearer ${token}`
      }
    }
    API.post("/tiket", dataTiket, config)
      .then((response) => {
        Swal.fire({
          title: "SUKSES",
          className: "swal2-container",
        });
        dispatch(addTiketSuccess(response?.data?.data));
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
          title: error.response?.data?.message,
          className: "swal2-container",
        });
        dispatch(addTiketFaied(error?.response?.data?.message));
      });
  };
};

const ORDER = (data) => ({
  type: tiket.ORDER,
  payload: data,
});

export const AddOrder = (data) =>{
  return function(dispatch) {
    dispatch(ORDER(data)) 
  }
}