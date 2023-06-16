import { API } from "../../api/api";
import * as transaksi from "../constant/transaksi";
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
        dispatch(getTransaksiSuccess(response.data.data));
      })
      .catch((error) => {
        dispatch(getTransaksiFailed(error.response.data.message));
      });
  };
};
