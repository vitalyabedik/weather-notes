import { SET_NOTE } from "../actions/actionTypes";

const initialValue = [
  // example data
  { time: "08:00", text: "Start work" },
  { time: "17:15", text: "End work" },
  { time: "17:30", text: "Go to the gym" },
  { time: "18:30", text: "Start learning" },
  { time: "19:20", text: "Go sleep" },
];

const notesReducer = (state = initialValue, action) => {
  switch (action.type) {
    case SET_NOTE: {
      return [...state, action.payload];
    }
    default: {
      return state;
    }
  }
};

export default notesReducer;
