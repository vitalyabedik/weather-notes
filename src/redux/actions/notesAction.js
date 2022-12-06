import { ADD_NOTE, DELETE_NOTE, UPDATE_NOTE } from "./actionTypes";

export const addNote = (note) => ({
  type: ADD_NOTE,
  payload: note,
});

export const deleteNote = (note) => ({
  type: DELETE_NOTE,
  payload: note,
});

export const updateNote = (note) => ({
  type: UPDATE_NOTE,
  payload: note,
});
