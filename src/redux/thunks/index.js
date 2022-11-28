import { SET_WEATHER_ERROR } from "../actions/actionTypes";

import { setLocation, setLocationError } from "../actions/locationAction";

import {
  setWeatherOpenWeather,
  setWeatherStormGlass,
  setWeatherLoading,
  setWeatherError,
} from "../actions/weatherAction";

export const getLocationInfoByCoordinates =
  (lat, lon) =>
  async (dispatch, _, { geocodingAPI }) => {
    try {
      const response = await geocodingAPI.getPlaceNameByCoordinates(lat, lon);
      dispatch(setLocation(response.data));
    } catch (error) {
      dispatch(setLocationError(error.message));
    }
  };

export const getLocationCoordinatesByCityName =
  (city) =>
  async (dispatch, _, { geocodingAPI }) => {
    try {
      const response = await geocodingAPI.getCoordinatesByCity(city);
      dispatch(setLocation(response.data));
    } catch (error) {
      dispatch(setLocationError(error.message));
    }
  };

export const getWeatherForecastByCoordinates =
  (lat, lon) =>
  async (dispatch, _, { openWeatherAPI }) => {
    dispatch(setWeatherLoading());
    try {
      const response = await openWeatherAPI.getWeatherForecast(lat, lon);
      dispatch(setWeatherOpenWeather(response.data));
    } catch (error) {
      dispatch(setWeatherError(error.message));
    }
  };

export const getWeatherForecastByCityName =
  (city) =>
  async (dispatch, _, { geocodingAPI }) => {
    try {
      const response = await geocodingAPI.getCoordinatesByCity(city);
      const locationData = dispatch(setLocation(response.data));
      const { lat, lon } = locationData.payload[0];
      dispatch(getWeatherForecastByCoordinates(lat, lon));
    } catch (e) {
      dispatch({
        type: SET_WEATHER_ERROR,
        payload: "Please, enter correct city name!",
      });
    }
  };

// !!!
export const getWeatherStormGlass =
  (lat, lon) =>
  async (dispatch, _, { stormGlassAPI }) => {
    dispatch(setWeatherLoading());
    try {
      const response = await stormGlassAPI.getWeatherForecast(lat, lon);
      dispatch(setWeatherStormGlass(response.data));
      console.log(response.data);
    } catch (error) {
      dispatch(setWeatherError(error.message));
    }
  };
