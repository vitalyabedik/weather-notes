import {
  APP_CALENDAR_OPEN,
  APP_CALENDAR_CLOSE,
  APP_NOTE_OPEN,
  APP_NOTE_CLOSE,
  APP_CHANGE_OPTION_FORECAST,
} from "./actionTypes";

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
