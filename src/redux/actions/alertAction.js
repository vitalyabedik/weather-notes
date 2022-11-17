import { SET_ALERT } from "./actionTypes";

const setAlert = (message) => ({
  type: SET_ALERT,
  payload: message,
});

export default setAlert;
