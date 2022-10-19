import { SET_TEXT } from "../actions/actionTypes";

const initialValue = "";

const textReducer = (state = initialValue, action) => {
  switch (action.type) {
    case SET_TEXT: {
      return action.payload;
    }
    default: {
      return state;
    }
  }
};

export default textReducer;
