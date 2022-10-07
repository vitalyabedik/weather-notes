import { useState } from "react";

import "./AppLayout.module.scss";

import ActionPanel from "../actionPanel";
import CurrentInfo from "../currentInfo";
import Weather from "../weather";
import CurrentEvent from "../currentEvent";

const AppLayout = () => {
  const [isDailyForecast, setIsDailyForecast] = useState(true);

  const changeForecastOption = () => {
    setIsDailyForecast(!isDailyForecast);
  };

  return (
    <div className="wrapper">
      <div style={{ margin: 20 }}>
        <header>
          <ActionPanel changeForecastOption={changeForecastOption} />
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
