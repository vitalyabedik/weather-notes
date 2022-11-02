import {
  SET_WEATHER,
  SET_WEATHER_ERROR,
  SET_WEATHER_LOADING,
} from "./actionTypes";

export const setWeather = (data) => ({
  type: SET_WEATHER,
  payload: data,
});

export const setError = (error) => ({
  type: SET_WEATHER_ERROR,
  payload: error,
});

export const setLoading = () => ({
  type: SET_WEATHER_LOADING,
});

export const loadWeather =
  (lat, lon) =>
  (dispatch, _, { client, openWeatherAPI }) => {
    dispatch(setLoading);

    client
      .get(openWeatherAPI.getWeatherForecast(lat, lon))
      .then(({ data }) => dispatch(setWeather(data)))
      .catch((error) => dispatch(setError(error.message)));
  };
