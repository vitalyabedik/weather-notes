import { useState } from "react";

import "./AppLayout.module.scss";

import ActionPanel from "../actionPanel";
import CurrentInfo from "../currentInfo";
import Weather from "../weather";
import CurrentEvent from "../currentEvent";

const AppLayout = () => {
  const [showDailyForecast, setShowDailyForecast] = useState(true);

  const changeForecastOption = (value) => {
    setShowDailyForecast(!value);
  };

  return (
    <div className="wrapper">
      <div style={{ margin: 20 }}>
        {" "}
        <header>
          <ActionPanel changeForecastOption={changeForecastOption} />
        </header>{" "}
        <main>
          <CurrentInfo />
          <CurrentEvent />
          <Weather showDailyForecast={showDailyForecast} />
        </main>
      </div>
    </div>
  );
};

export default AppLayout;
