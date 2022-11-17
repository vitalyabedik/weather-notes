import { useState, useEffect } from "react";
import { useSelector } from "react-redux";

import styles from "./AppLayout.module.scss";

import Header from "../header";
import CurrentInfo from "../currentInfo";
import Weather from "../weather";
import CurrentEvent from "../currentEvent";
import getWeatherBackground from "../../utils/getWeatherBackground";

const AppLayout = () => {
  const weather = useSelector((state) => state.weather.data);

  const weatherMain = weather?.current?.weather?.[0]?.main;

  const [isDailyForecast, setIsDailyForecast] = useState(true);

  const changeForecastOption = () => {
    setIsDailyForecast(!isDailyForecast);
  };

  const layoutBackground = getWeatherBackground(weatherMain);

  return (
    <div
      className={styles.wrapper}
      style={{ backgroundImage: `url(${layoutBackground})` }}
    >
      <div className={styles.container}>
        <div>
          {" "}
          <header>
            <Header changeForecastOption={changeForecastOption} />
          </header>{" "}
          <main>
            <CurrentInfo />
            <CurrentEvent />
            <Weather isDailyForecast={isDailyForecast} />
          </main>
        </div>
      </div>
    </div>
  );
};

export default AppLayout;
