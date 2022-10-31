// OPENWEATHER API
const BASE_WEATHER_URL_OPENWEATHER = "https://api.openweathermap.org/data/2.5/";
const BASE_GEOCODING_URL_OPENWEATHER = "http://api.openweathermap.org/geo/1.0/";
const OPENWEATHER_API_KEY = `b9ac83fce506bd99363a07a936631208`;

export const openWeatherAPI = {
  getCurrentWeatherByCoordinates(lat, lon) {
    return `${BASE_WEATHER_URL_OPENWEATHER}weather?lat=${lat}&lon=${lon}&units=metric&appid=${OPENWEATHER_API_KEY}`;
  },
  getCurrentWeatherByCityName(city) {
    return `${BASE_WEATHER_URL_OPENWEATHER}weather?q=${city}&units=metric&appid=${OPENWEATHER_API_KEY}`;
  },
  // getDailyForecast(lat, lon) {
  //   return `${BASE_WEATHER_URL_OPENWEATHER}forecast/daily?lat=${lat}&lon=${lon}&cnt={cnt}&units=metric&appid=${OPENWEATHER_API_KEY}`;
  // },
};

export const geocodingAPI = {
  getPlaceNameByCoordinates(lon, lat) {
    return `${BASE_GEOCODING_URL_OPENWEATHER}reverse?lat=${lat}&lon=${lon}&limit=1&appid=${OPENWEATHER_API_KEY}`;
  },
  getCoordinatesByCity(city) {
    return `${BASE_GEOCODING_URL_OPENWEATHER}direct?q=${city}&limit=1&appid=${OPENWEATHER_API_KEY}`;
  },
};
