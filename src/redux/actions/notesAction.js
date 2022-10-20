import { SET_NOTE, REMOVE_NOTE } from "./actionTypes";

export const setNote = (time, text) => ({
  type: SET_NOTE,
  payload: {
    time,
    text,
  },
});

export const removeNote = (data) => ({
  type: REMOVE_NOTE,
  payload: data,
});
