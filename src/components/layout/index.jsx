import { useState } from "react";

import styles from "./AppLayout.module.scss";

import Header from "../header";
import CurrentInfo from "../currentInfo";
import Weather from "../weather";
import CurrentEvent from "../currentEvent";

const AppLayout = () => {
  const [isDailyForecast, setIsDailyForecast] = useState(true);

  const changeForecastOption = () => {
    setIsDailyForecast(!isDailyForecast);
  };

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
