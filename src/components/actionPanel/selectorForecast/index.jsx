import { Switch } from "antd";

import "./selectorForecast.scss";

// import DailyList from "../../weather/days/dailyForecast/dailyList";
// import HourlyList from "../../weather/days/hourlyForecast/hourlyList";

const SelectorForecast = () => (
  <div>
    <Switch
      checkedChildren="Show Daily Forecast"
      unCheckedChildren="Show Hourly Forecast"
      defaultChecked
    />
  </div>
);

export default SelectorForecast;
