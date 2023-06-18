import Swal from "sweetalert2";
import { API } from "../../api/api";
import * as transaksi from "../constant/transaksi";
import { Navigate, useNavigate } from "react-router-dom";
const getTransaksi = () => ({
  type: transaksi.GET_TRANSAKSI,
});
const getTransaksiSuccess = (data) => ({
  type: transaksi.GET_TRANSAKSI_SUCCESS,
  payload: data,
});
const getTransaksiFailed = (error) => ({
  type: transaksi.GET_TRANSAKSI_FAILED,
  payload: error,
});

export const transaksiFunc = (token) => {
  return function (dispatch) {
    dispatch(getTransaksi());
    console.log(token, "INI KONTOL");
    let config = {
      headers: {
        Authorization: `Bearer ${token}`
      }
    }
    API.get("/transaksi", config)
      .then((response) => {
        dispatch(getTransaksiSuccess(response?.data?.data));
      })
      .catch((error) => {
        dispatch(getTransaksiFailed(error?.response?.data?.message));
      });
  };
};

const AddTransaksi = () => ({
  type: transaksi.ADD_TRANSAKSI,
});
const AddTransaksiSuccess = (data) => ({
  type: transaksi.ADD_TRANSAKSI_SUCCESS,
  payload: data,
});
const AddTransaksiFailed = (error) => ({
  type: transaksi.ADD_TRANSAKSI_FAILED,
  payload: error,
});

export const AddtransaksiFunc = (order, token) => {
  // const Nav = useNavigate()
  return function (dispatch) {
    dispatch(AddTransaksi());
    console.log(token, "INI");
    let config = {
      headers: {
        Authorization: `Bearer ${token}`
      }
    }
    API.post("/transaksi",order, config)
      .then((response) => {
        Swal.fire({
          title: "SUKSES",
          className: "swal2-container",
        });
        
        dispatch(AddTransaksiSuccess(response?.data?.data));
        setTimeout(() => {
          window.location.assign('/tiket-saya');
        }, 2000);
      })
      .catch((error) => {
        Swal.fire({
          title: "FAILED",
          className: "swal2-container",
        });
        dispatch(AddTransaksiFailed(error?.response?.data?.message));
      });
  };
};


const DeleteTransaksi = () => ({
  type: transaksi.DELETE_TRANSAKSI,
});
const DeleteTransaksiSuccess = (data) => ({
  type: transaksi.DELETE_TRANSAKSI_SUCCESS,
  payload: data,
});
const DeleteTransaksiFailed = (error) => ({
  type: transaksi.DELETE_TRANSAKSI_FAILED,
  payload: error,
});

export const DeletetransaksiFunc = (id, token) => {
  // const Nav = useNavigate()
  return function (dispatch) {
    dispatch(DeleteTransaksi());
    console.log(token, "INI");
    let config = {
      headers: {
        Authorization: `Bearer ${token}`
      }
    }
    API.delete(`/transaksi/${id}`, config)
      .then((response) => {
        Swal.fire({
          title: "SUKSES",
          className: "swal2-container",
        });
        
        dispatch(DeleteTransaksiSuccess(response?.data?.data));
        setTimeout(() => {
          window.location.assign('/tiket-saya');
        }, 2000);
      })
      .catch((error) => {
        Swal.fire({
          title: "FAILED",
          className: "swal2-container",
        });
        dispatch(DeleteTransaksiFailed(error?.response?.data?.message));
      });
  };
};


