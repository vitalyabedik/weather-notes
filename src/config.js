const BASE_WEATHER_URL_OPENWEATHER = "https://api.openweathermap.org/data/2.5/";
const BASE_GEOCODING_URL_OPENWEATHER = "http://api.openweathermap.org/geo/1.0/";
const APIKey = process.env.REACT_APP_OPENWEATHER_API_KEY;

export const openWeatherAPI = {
  getCurrentWeatherByCoordinates(lat, lon) {
    return `${BASE_WEATHER_URL_OPENWEATHER}weather?lat=${lat}&lon=${lon}&units=metric&appid=${APIKey}`;
  },
  getCurrentWeatherByCityName(city) {
    return `${BASE_WEATHER_URL_OPENWEATHER}weather?q=${city}&units=metric&appid=${APIKey}`;
  },
  getWeatherForecast(lat, lon) {
    return `${BASE_WEATHER_URL_OPENWEATHER}onecall?lat=${lat}&lon=${lon}&units=metric&exclude=minutely&appid=${APIKey}`;
  },
};

export const geocodingAPI = {
  getPlaceNameByCoordinates(lat, lon) {
    return `${BASE_GEOCODING_URL_OPENWEATHER}reverse?lat=${lat}&lon=${lon}&limit=1&appid=${APIKey}`;
  },
  getCoordinatesByCity(city) {
    return `${BASE_GEOCODING_URL_OPENWEATHER}direct?q=${city}&limit=1&appid=${APIKey}`;
  },
};
