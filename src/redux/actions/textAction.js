import { SET_TEXT } from "./actionTypes";

const setText = (data) => ({
  type: SET_TEXT,
  payload: data,
});

export default setText;
