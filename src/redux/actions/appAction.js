import {
  APP_SET_TEXT,
  APP_CALENDAR_OPEN,
  APP_CALENDAR_CLOSE,
  APP_NOTE_OPEN,
  APP_NOTE_CLOSE,
  APP_CHANGE_OPTION_FORECAST,
  APP_CHANGE_OPTION_API,
} from "./actionTypes";

export const setText = (text) => ({
  type: APP_SET_TEXT,
  payload: text,
});

export const openCalendar = () => ({
  type: APP_CALENDAR_OPEN,
});

export const closeCalendar = () => ({
  type: APP_CALENDAR_CLOSE,
});

export const openNote = () => ({
  type: APP_NOTE_OPEN,
});

export const closeNote = () => ({
  type: APP_NOTE_CLOSE,
});

export const changeOptionForecast = (forecastOption) => ({
  type: APP_CHANGE_OPTION_FORECAST,
  payload: forecastOption,
});

export const changeOptionAPI = (apiOption) => ({
  type: APP_CHANGE_OPTION_API,
  payload: apiOption,
});
