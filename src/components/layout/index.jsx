import { useState, useEffect } from "react";
import { useSelector } from "react-redux";

import styles from "./AppLayout.module.scss";

import Header from "../header";
import CurrentInfo from "../currentInfo";
import Weather from "../weather";
import CurrentEvent from "../currentEvent";

const AppLayout = () => {
  const [background, setBackground] = useState("clouds");
  const weather = useSelector((state) => state.weather.data);

  const weatherMain = weather?.current?.weather?.[0]?.main.toLowerCase();

  const [isDailyForecast, setIsDailyForecast] = useState(true);

  const changeForecastOption = () => {
    setIsDailyForecast(!isDailyForecast);
  };

  useEffect(() => {
    setBackground(weatherMain);
    const backgroundLayout = `var(--background-image-${background})`;
    document.body.style.setProperty("--background-image", backgroundLayout);
  }, []);

  return (
    <div className={styles.wrapper}>
      <div className={styles.container}>
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
  );
};

export default AppLayout;
