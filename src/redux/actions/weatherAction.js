import {
  SET_WEATHER,
  SET_WEATHER_ERROR,
  SET_WEATHER_LOADING,
} from "./actionTypes";

const APIKey = process.env.REACT_APP_OPENWEATHER_API_KEY;

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

export const loadWeather =
  (lat, lon) =>
  (dispatch, _, { client, openWeatherAPI }) => {
    dispatch(setWeatherLoading);

    client
      .get(openWeatherAPI.getWeatherForecast(lat, lon))
      .then(({ data }) => dispatch(setWeather(data)))
      .catch((error) => dispatch(setWeatherError(error.message)));
  };

export const getWeatherByCityName = (city) => async (dispatch) => {
  try {
    const res = await fetch(
      `https://api.openweathermap.org/data/2.5/weather?q=${city}&units=metric&appid=${APIKey}`
    );

    if (!res.ok) {
      const resData = await res.json();
      throw new Error(resData.message);
    }

    const resData = await res.json();
    dispatch({
      type: SET_WEATHER,
      payload: resData,
    });
  } catch (err) {
    dispatch({
      type: SET_WEATHER_ERROR,
      payload: err.message,
    });
  }
};
