import {
  SET_WEATHER_DATA_OPENWEATHER,
  SET_WEATHER_DATA_STORMGLASS,
  SET_WEATHER_ERROR,
  SET_WEATHER_LOADING,
} from "./actionTypes";

export const setWeatherOpenWeather = (openWeatherData) => ({
  type: SET_WEATHER_DATA_OPENWEATHER,
  payload: openWeatherData,
});

export const setWeatherStormGlass = (stormGlassData) => ({
  type: SET_WEATHER_DATA_STORMGLASS,
  payload: stormGlassData,
});

export const setWeatherLoading = () => ({
  type: SET_WEATHER_LOADING,
});

export const setWeatherError = (error) => ({
  type: SET_WEATHER_ERROR,
  payload: error,
});
