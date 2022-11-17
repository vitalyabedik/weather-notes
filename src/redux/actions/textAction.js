import { SET_TEXT } from "./actionTypes";

const setText = (text) => ({
  type: SET_TEXT,
  payload: text,
});

export default setText;
