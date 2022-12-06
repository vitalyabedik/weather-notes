import {
  SET_LOCATION,
  SET_LOCATION_ERROR,
  SET_LOCATION_LOADING,
} from "./actionTypes";

export const setLocation = (data) => ({
  type: SET_LOCATION,
  payload: data,
});

export const setLocationError = (error) => ({
  type: SET_LOCATION_ERROR,
  payload: error,
});

export const setLocationLoading = () => ({
  type: SET_LOCATION_LOADING,
});
