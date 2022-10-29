// OPENWEATHER API
const BASE_URL_OPENWEATHER = "https://api.openweathermap.org/data/2.5/";
const OPENWEATHER_API_KEY = `b9ac83fce506bd99363a07a936631208`;

export const currentWeatherOPENWEATHER = (lat, lon) =>
  `${BASE_URL_OPENWEATHER}weather?lat=${lat}&lon=${lon}&units=metric&appid=${OPENWEATHER_API_KEY}`;

export const dailyWeatherOPENWEATHER = (lat, lon) =>
  `${BASE_URL_OPENWEATHER}weather?lat=${lat}&lon=${lon}&units=metric&appid=${OPENWEATHER_API_KEY}`;
