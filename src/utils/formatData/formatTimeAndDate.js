import moment from "moment";

// formats
export const formatHourMinute = "HH:mm";
export const formatWeekdayDateMonthYear = "dddd, D MMMM YYYY";
export const formatWeekday = "ddd";
export const formatCalendarYearMonthDay = "YYYY-MM-DD";

// dateAndTime
export const nowDay = moment();
export const setFormat = (value, format) => value.format(format);
export const convertTimestamp = (timestamp) => moment.unix(timestamp);

export const setCurrentTime = (value) => moment(value);
export const getCurrentTime = (value) => moment(value).format(formatHourMinute); //

// calendar
export const setCalendarDate = () =>
  setFormat(nowDay, formatCalendarYearMonthDay);

export const weekDaysNumberFormat = moment.updateLocale("en", {
  week: {
    dow: 1,
    doy: 7,
  },
});

export const weekDaysNameFormat = moment.updateLocale("en", {
  weekdaysMin: ["Sun", "Mon", "Tue", "Wed", "Thu", "Fri", "Sat"],
});
