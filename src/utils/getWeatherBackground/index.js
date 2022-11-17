import clear from "../../assets/images/clear.jpg";
import clouds from "../../assets/images/clouds.jpg";
import fog from "../../assets/images/fog.jpg";
import drizzle from "../../assets/images/drizzle.jpg";
import rain from "../../assets/images/rain.jpg";
import thunder from "../../assets/images/thunder.jpg";
import snow from "../../assets/images/snow.jpg";

const getWeatherBackground = (data) => {
  let backgroundImage = null;

  switch (data) {
    case "Clear":
      backgroundImage = clear;
      break;
    case "Clouds":
      backgroundImage = clouds;
      break;
    case "Fog":
      backgroundImage = fog;
      break;
    case "Drizzle":
      backgroundImage = drizzle;
      break;
    case "Rain":
      backgroundImage = rain;
      break;
    case "Thunder":
      backgroundImage = thunder;
      break;
    case "Snow":
      backgroundImage = snow;
      break;

    default:
      backgroundImage = null;
  }

  return backgroundImage;
};

export default getWeatherBackground;
