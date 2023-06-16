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
        dispatch(getTiketSuccess(response.data.data));
      })
      .catch((error) => {
        dispatch(getTiketFailed(error.response.data.message));
      });
  };
};
