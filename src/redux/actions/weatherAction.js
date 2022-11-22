import {
  SET_WEATHER,
  SET_WEATHER_ERROR,
  SET_WEATHER_LOADING,
} from "./actionTypes";

export const setWeather = (data) => ({
  type: SET_WEATHER,
  payload: data,
});

export const setWeatherError = (error) => ({
  type: SET_WEATHER_ERROR,
  payload: error,
});

export const setWeatherLoading = () => ({
  type: SET_WEATHER_LOADING,
});
