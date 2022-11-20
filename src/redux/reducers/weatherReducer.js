import {
  SET_WEATHER,
  SET_WEATHER_ERROR,
  SET_WEATHER_LOADING,
} from "../actions/actionTypes";

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
    case SET_WEATHER_LOADING: {
      return {
        ...state,
        loading: true,
      };
    }
    case SET_WEATHER_ERROR: {
      return {
        ...state,
        error: action.payload,
        loading: false,
      };
    }
    default: {
      return state;
    }
  }
};

export default weatherReducer;
