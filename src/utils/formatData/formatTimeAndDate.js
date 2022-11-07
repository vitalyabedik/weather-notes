import moment from "moment";

export const formatHourMinute = "HH:mm";
export const formatWeekdayDateMonthYear = "dddd, D MMMM YYYY";
export const formatWeekday = "ddd";
export const formatCalendarYearMonthDay = "YYYY-MM-DD";

// dateAndTime

export const setCurrentTime = (value) => moment(value);
export const getCurrentDay = (timestamp) => moment.unix(timestamp);
export const getCurrentDate = () => moment().format(formatWeekdayDateMonthYear);
export const getCurrentTime = (value) => moment(value).format(formatHourMinute);
export const getCurrentDayName = (value) => moment(value).format(formatWeekday);

// calendar
export const setCalendarDate = () =>
  moment().format(formatCalendarYearMonthDay);

export const weekDaysNumberFormat = moment.updateLocale("en", {
  week: {
    dow: 1,
    doy: 7,
  },
});

export const weekDaysNameFormat = moment.updateLocale("en", {
  weekdaysMin: ["Sun", "Mon", "Tue", "Wed", "Thu", "Fri", "Sat"],
});
