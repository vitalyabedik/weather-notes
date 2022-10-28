// OPENWEATHER API
const BASE_URL_OPENWEATHER = "https:openweathermap.org/data/2.5";
const APIKeyOPENWEATHER = process.env.REACT_APP_OPENWEATHER_API_KEY;

const currentWeatherOPENWEATHER = (lat, lon) =>
  `${BASE_URL_OPENWEATHER}weather?lat=${lat}&lon=${lon}&units=metric&appid=${APIKeyOPENWEATHER}`;
export default currentWeatherOPENWEATHER;
