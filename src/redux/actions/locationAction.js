import {
  SET_LOCATION,
  SET_LOCATION_ERROR,
  SET_LOCATION_LOADING,
} from "./actionTypes";

export const setLocation = (data) => ({
  type: SET_LOCATION,
  payload: data,
});

export const setError = (error) => ({
  type: SET_LOCATION_ERROR,
  payload: error,
});

export const setLoading = () => ({
  type: SET_LOCATION_LOADING,
});

export const loadLocation =
  (lat, lon) =>
  (dispatch, _, { client, geocodingAPI }) => {
    dispatch(setLoading);

    client
      .get(geocodingAPI.getPlaceNameByCoordinates(lat, lon))
      .then(({ data }) => dispatch(setLocation(data)))
      .catch((error) => dispatch(setError(error.message)));
  };
