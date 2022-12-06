import {
  APP_SET_TEXT,
  APP_CALENDAR_OPEN,
  APP_CALENDAR_CLOSE,
  APP_NOTE_OPEN,
  APP_NOTE_CLOSE,
  APP_CHANGE_OPTION_FORECAST,
  APP_CHANGE_OPTION_API,
} from "../actions/actionTypes";

const initialValue = {
  text: "",
  isOpenCalendar: false,
  isOpenNote: false,
  isDailyForecast: true,
  isBasicAPI: true,
};

const appReducer = (state = initialValue, action) => {
  switch (action.type) {
    case APP_SET_TEXT: {
      return {
        ...state,
        text: action.payload,
      };
    }
    case APP_CALENDAR_OPEN: {
      return {
        ...state,
        isOpenCalendar: true,
      };
    }
    case APP_CALENDAR_CLOSE: {
      return {
        ...state,
        isOpenCalendar: false,
      };
    }
    case APP_NOTE_OPEN: {
      return {
        ...state,
        isOpenNote: true,
      };
    }
    case APP_NOTE_CLOSE: {
      return {
        ...state,
        isOpenNote: false,
      };
    }
    case APP_CHANGE_OPTION_FORECAST: {
      return {
        ...state,
        isDailyForecast: action.payload,
      };
    }
    case APP_CHANGE_OPTION_API: {
      return {
        ...state,
        isBasicAPI: action.payload,
      };
    }
    default: {
      return state;
    }
  }
};

export default appReducer;
