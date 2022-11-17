import { SET_LOCATION, SET_LOCATION_ERROR } from "../actions/actionTypes";
import locationAction, {
  setLocation,
  setLocationLoading,
  setLocationError,
} from "../actions/locationAction";

import {
  setWeather,
  setWeatherLoading,
  setWeatherError,
} from "../actions/weatherAction";

export const getLocationInfoByCoordinates =
  (lat, lon) =>
  (dispatch, _, { geocodingAPI }) => {
    dispatch(setLocationLoading());

    geocodingAPI
      .getPlaceNameByCoordinates(lat, lon)
      .then(({ data }) => dispatch(setLocation(data)))
      .catch((error) => dispatch(setLocationError(error.message)));
  };

export const getLocationCoordinatesByCityName =
  (city) =>
  (dispatch, _, { geocodingAPI }) => {
    dispatch(setLocationLoading());

    geocodingAPI
      .getCoordinatesByCity(city)
      .then(({ data }) => dispatch(setLocation(data)))
      .catch((error) => dispatch(setLocationError(error.message)));
  };

export const getWeatherForecastByCoordinates =
  (lat, lon) =>
  (dispatch, _, { openWeatherAPI }) => {
    dispatch(setWeatherLoading());

    openWeatherAPI
      .getWeatherForecast(lat, lon)
      .then(({ data }) => dispatch(setWeather(data)))
      .catch((error) => dispatch(setWeatherError(error.message)));
  };

export const getWeatherForecastByCityName =
  (city) =>
  (dispatch, _, { geocodingAPI }) => {
    dispatch(setLocationLoading());
    dispatch(setWeatherLoading());

    geocodingAPI
      .getCoordinatesByCity(city)
      .then(({ data }) => dispatch(setLocation(data)))
      .then((location) => {
        const { lat, lon } = location.payload[0];
        dispatch(getWeatherForecastByCoordinates(lat, lon));
      })
      .catch((error) => dispatch(setLocationError(error.message)));
  };

// !!! async/await

export const fetchLocationByCoordinates =
  (lat, lon) =>
  async (dispatch, _, { geocodingAPI }) => {
    try {
      dispatch(setLocationLoading());
      const response = await geocodingAPI.getPlaceNameByCoordinates(lat, lon);
      dispatch(setLocation(response.data));
    } catch (e) {
      dispatch({
        type: SET_LOCATION_ERROR,
        payload: "Произошла ошибка при загрузке локации!",
      });
    }
  };
