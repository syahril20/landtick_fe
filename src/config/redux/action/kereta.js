import * as kereta from "../constant/kereta";
import { API } from "../../api/api";
import Swal from "sweetalert2";
const get_kereta = () => ({
  type: kereta.GET_KERETA,
});
const get_keretaSuccess = (data) => ({
  type: kereta.GET_KERETA_SUCCESS,
  payload: data,
});
const get_keretaFailed = (error) => ({
  type: kereta.GET_KERETA_FAILED,
  payload: error,
});

export const get_keretaFunc = () => {
  return function (dispatch) {
    dispatch(get_kereta());
    API.get("/tiket")
      .then((response) => {
        dispatch(get_keretaSuccess(response.data.data));
      })
      .catch((error) => {
        dispatch(get_keretaFailed(error.response.data.message));
      });
  };
};
