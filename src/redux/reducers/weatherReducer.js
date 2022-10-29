import { SET_WEATHER, SET_ERROR, SET_LOADING } from "../actions/actionTypes";

const initialValue = {
  data: null,
  loading: false,
  error: "",
};

const weatherReducer = (state = initialValue, action) => {
  switch (action.type) {
    case SET_WEATHER: {
      return {
        ...state,
        data: action.payload,
        loading: false,
        error: "",
      };
    }

    case SET_ERROR: {
      return {
        ...state,
        error: action.payload,
        loading: false,
      };
    }

    case SET_LOADING: {
      return {
        ...state,
        loading: true,
      };
    }

    default: {
      return state;
    }
  }
};

export default weatherReducer;
