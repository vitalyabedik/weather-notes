import axios from "axios";

const APIKey = process.env.REACT_APP_OPENWEATHER_API_KEY;

const instance = axios.create({
  baseURL: "https://api.openweathermap.org/geo/1.0/",
});

const geocodingAPI = {
  getPlaceNameByCoordinates(lat, lon) {
    return instance.get(
      `reverse?lat=${lat}&lon=${lon}&limit=1&appid=${APIKey}`
    );
  },
  getCoordinatesByCity(city) {
    return instance.get(`direct?q=${city}&limit=1&appid=${APIKey}`);
  },
};

export default geocodingAPI;
