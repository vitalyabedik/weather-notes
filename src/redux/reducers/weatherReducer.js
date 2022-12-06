import {
  SET_WEATHER_DATA_OPENWEATHER,
  SET_WEATHER_DATA_STORMGLASS,
  SET_WEATHER_LOADING,
  SET_WEATHER_ERROR,
} from "../actions/actionTypes";

const initialValue = {
  openWeatherData: null,
  stormGlassData: null,
  loading: false,
  error: "",
};

const weatherReducer = (state = initialValue, action) => {
  switch (action.type) {
    case SET_WEATHER_DATA_OPENWEATHER: {
      return {
        ...state,
        openWeatherData: action.payload,
        loading: false,
        error: "",
      };
    }
    case SET_WEATHER_DATA_STORMGLASS: {
      return {
        ...state,
        stormGlassData: action.payload,
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
