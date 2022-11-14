import {
  SET_LOCATION,
  SET_LOCATION_ERROR,
  SET_LOCATION_LOADING,
} from "./actionTypes";
import { loadWeather } from "./weatherAction";

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

export const loadLocation =
  (lat, lon) =>
  (dispatch, _, { client, geocodingAPI }) => {
    dispatch(setLocationLoading);

    client
      .get(geocodingAPI.getPlaceNameByCoordinates(lat, lon))
      .then(({ data }) => dispatch(setLocation(data)))
      .catch((error) => dispatch(setLocationError(error.message)));
  };

// export const loadCoordinates =
//   (city) =>
//   (dispatch, _, { client, geocodingAPI }) => {
//     dispatch(setLoading);

//     client
//       .get(geocodingAPI.getCoordinatesByCity(city))
//       .then(({ data }) => dispatch(setLocation(data)))
//       .catch((error) => dispatch(setError(error.message)));
//   };

export const loadWeatherByCity =
  (city) =>
  (dispatch, _, { client, geocodingAPI }) => {
    dispatch(setLocationLoading);

    client
      .get(geocodingAPI.getCoordinatesByCity(city))
      .then(({ data }) => dispatch(setLocation(data)))
      .then((location) =>
        dispatch(loadWeather(location.payload[0].lat, location.payload[0].lon))
      )
      .catch((error) => dispatch(setLocationError(error.message)));
  };
