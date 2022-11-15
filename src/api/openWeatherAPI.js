import axios from "axios";

const APIKey = process.env.REACT_APP_OPENWEATHER_API_KEY;

const instance = axios.create({
  baseURL: "https://api.openweathermap.org/data/2.5/",
});

const openWeatherAPI = {
  getWeatherForecast(lat, lon) {
    return instance.get(
      `onecall?lat=${lat}&lon=${lon}&units=metric&exclude=minutely&appid=${APIKey}`
    );
  },
};

export default openWeatherAPI;
