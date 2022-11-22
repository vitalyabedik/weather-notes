import {
  APP_CALENDAR_OPEN,
  APP_CALENDAR_CLOSE,
  APP_NOTE_OPEN,
  APP_NOTE_CLOSE,
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
