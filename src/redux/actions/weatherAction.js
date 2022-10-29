import { SET_WEATHER, SET_ERROR, SET_LOADING } from "./actionTypes";

export const setWeather = (data) => ({
  type: SET_WEATHER,
  payload: data,
});

export const setError = (error) => ({
  type: SET_ERROR,
  payload: error,
});

export const setLoading = () => ({
  type: SET_LOADING,
});

export const loadCurrentWeather =
  (lat, lon) =>
  (dispatch, _, { client, api }) => {
    dispatch(setLoading);

    client
      .get(api.currentWeatherOPENWEATHER(lat, lon))
      .then(({ data }) => dispatch(setWeather(data)))
      .catch((error) => dispatch(setError(error.message)));
  };
