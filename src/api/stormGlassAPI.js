import axios from "axios";

const APIKey = process.env.REACT_APP_STORMGLASS_API_KEY;

const instance = axios.create({
  baseURL: "https://api.stormglass.io/v2/weather/",
  headers: {
    Authorization: APIKey,
  },
});

const stormGlassAPI = {
  getWeatherForecast(lat, lon) {
    return instance.get(
      `point?lat=${lat}&lng=${lon}&params=airTemperature&source=sg`
    );
  },
};

export default stormGlassAPI;
