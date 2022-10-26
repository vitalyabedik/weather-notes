import { GET_WEATHER, SET_ERROR, SET_LOADING } from "./actionTypes";

export const getWeather = (data) => ({
  type: GET_WEATHER,
  payload: data,
});

export const setError = (error) => ({
  type: SET_ERROR,
  payload: error,
});

export const setLoading = () => ({
  type: SET_LOADING,
});
