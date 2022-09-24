import SelectorForecast from "./selectorForecast";
import DailyList from "./dailyForecast/dailyList";
import HourlyList from "./hourlyForecast/hourlyList";

const DaysForecast = () => (
  <div>
    <SelectorForecast />
    <DailyList />
    <HourlyList />
  </div>
);

export default DaysForecast;
