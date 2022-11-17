import { SET_ALERT } from "../actions/actionTypes";

const initialValue = {
  message: "",
};

const alertReducer = (state = initialValue, action) => {
  switch (action.type) {
    case SET_ALERT: {
      return {
        message: action.payload,
      };
    }
    default: {
      return state;
    }
  }
};

export default alertReducer;
