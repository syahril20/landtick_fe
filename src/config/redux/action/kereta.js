import { API } from "../../api/api";
import * as kereta from "../constant/kereta";
const getKereta = () => ({
  type: kereta.GET_KERETA,
});
const getKeretaSuccess = (data) => ({
  type: kereta.GET_KERETA_SUCCESS,
  payload: data,
});
const getKeretaFailed = (error) => ({
  type: kereta.GET_KERETA_FAILED,
  payload: error,
});

export const getKeretaFunc = () => {
  return function (dispatch) {
    dispatch(getKereta());
    API.get("/kereta")
      .then((response) => {
        dispatch(getKeretaSuccess(response.data.data));
      })
      .catch((error) => {
        dispatch(getKeretaFailed(error.response.data.message));
      });
  };
};
