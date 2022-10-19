import { SET_NOTE, ADD_NOTE } from "./actionTypes";

export const setNote = (time, text) => ({
  type: SET_NOTE,
  payload: {
    time,
    text,
  },
});

export const addNote = (data) => ({
  type: ADD_NOTE,
  payload: data,
});
