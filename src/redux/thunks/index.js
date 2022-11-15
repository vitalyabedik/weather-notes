import {
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
