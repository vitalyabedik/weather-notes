import moment from "moment";

// formats
export const formatHour = "HH";
export const formatHourMinute = "HH:mm";
export const formatWeekdayDateMonthYear = "dddd, D MMMM YYYY";
export const formatDateMonth = "D MMMM";
export const formatWeekday = "ddd";
export const formatCalendarDayMonthYear = "DD.MM.YYYY";

// dateAndTime
export const nowDay = moment();
export const setFormat = (value, format) => value.format(format);
export const convertTimestamp = (timestamp) => moment.unix(timestamp);
export const convertToTimestamp = (value) => moment(value).unix();

export const setCurrentTime = (value) => moment(value);
export const getCurrentTimestamp = () => moment().valueOf();
export const getCurrentTime = (value) => moment(value).format(formatHourMinute); //
export const getCurrentTimeUTC = (value, format) =>
  moment(value).utc().format(format);

// calendar
export const setCalendarDate = () =>
  setFormat(nowDay, formatCalendarDayMonthYear);

export const weekDaysNumberFormat = moment.updateLocale("en", {
  week: {
    dow: 1,
    doy: 7,
  },
});

export const weekDaysNameFormat = moment.updateLocale("en", {
  weekdaysMin: ["Sun", "Mon", "Tue", "Wed", "Thu", "Fri", "Sat"],
});
