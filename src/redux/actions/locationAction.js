import {
  SET_LOCATION,
  SET_LOCATION_ERROR,
  SET_LOCATION_LOADING,
} from "./actionTypes";
// import { loadWeather } from "./weatherAction";

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

// export const loadLocation =
//   (lat, lon) =>
//   (dispatch, _, { geocodingAPI }) => {
//     dispatch(setLocationLoading());

//     geocodingAPI
//       .getPlaceNameByCoordinates(lat, lon)
//       .then(({ data }) => dispatch(setLocation(data)))
//       .catch((error) => dispatch(setLocationError(error.message)));
//   };

// export const loadWeatherByCity =
//   (city) =>
//   (dispatch, _, { geocodingAPI }) => {
//     dispatch(setLocationLoading);

//     geocodingAPI
//       .getCoordinatesByCity(city)
//       .then(({ data }) => dispatch(setLocation(data)))
//       .then((location) =>
//         dispatch(loadWeather(location.payload[0].lat, location.payload[0].lon))
//       )
//       .catch((error) => dispatch(setLocationError(error.message)));
//   };
