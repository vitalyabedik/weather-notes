import {
  SET_LOCATION,
  SET_LOCATION_ERROR,
  SET_LOCATION_LOADING,
} from "../actions/actionTypes";

const initialValue = {
  data: null,
  loading: false,
  error: "",
};

const locationReducer = (state = initialValue, action) => {
  switch (action.type) {
    case SET_LOCATION: {
      return {
        ...state,
        data: action.payload,
        loading: false,
        error: "",
      };
    }

    case SET_LOCATION_ERROR: {
      return {
        ...state,
        error: action.payload,
        loading: false,
      };
    }

    case SET_LOCATION_LOADING: {
      return {
        ...state,
        loading: true,
      };
    }

    default: {
      return state;
    }
  }
};

export default locationReducer;
