import { ADD_NOTE, DELETE_NOTE, UPDATE_NOTE } from "../actions/actionTypes";

const initialValue = [
  // example data
  { id: 1, time: "08:00", text: "Start work" },
  { id: 2, time: "17:15", text: "End work" },
  { id: 3, time: "17:30", text: "Go to the gym" },
  { id: 4, time: "18:30", text: "Start learning" },
  { id: 5, time: "19:20", text: "Go sleep" },
];

const notesReducer = (state = initialValue, action) => {
  switch (action.type) {
    case ADD_NOTE: {
      return [...state, action.payload];
    }
    case DELETE_NOTE: {
      return state.filter((note) => note.id !== action.payload);
    }

    case UPDATE_NOTE: {
      return [...state, action.payload];
    }

    default: {
      return state;
    }
  }
};

export default notesReducer;