import {
  APP_CALENDAR_OPEN,
  APP_CALENDAR_CLOSE,
  APP_NOTE_OPEN,
  APP_NOTE_CLOSE,
} from "../actions/actionTypes";

const initialValue = {
  isOpenCalendar: false,
  isOpenNote: false,
};

const appReducer = (state = initialValue, action) => {
  switch (action.type) {
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
    default: {
      return state;
    }
  }
};

export default appReducer;
