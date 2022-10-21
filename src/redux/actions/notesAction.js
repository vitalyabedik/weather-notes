import { SET_NOTE, REMOVE_NOTE } from "./actionTypes";

export const setNote = (id, time, text) => ({
  type: SET_NOTE,
  payload: {
    id,
    time,
    text,
  },
});

export const removeNote = (id) => ({
  type: REMOVE_NOTE,
  payload: id,
});
