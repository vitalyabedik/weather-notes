import "./selectorForecast.scss";

import { Tabs } from "antd";

import DailyList from "../../weather/days/dailyForecast/dailyList";
import HourlyList from "../../weather/days/hourlyForecast/hourlyList";

const items = [
  { label: "Daily Forecast", key: "Daily", children: <DailyList /> },
  { label: "Hourly Forecast", key: "Hourly", children: <HourlyList /> },
];

const SelectorForecast = () => (
  <div>
    <Tabs
      className="selectorForecast"
      type="card"
      defaultActiveKey="Daily"
      items={items}
    />
  </div>
);

export default SelectorForecast;
