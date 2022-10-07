import DailyForecast from "./dailyForecast";
import HourlyForecast from "./hourlyForecast";

const DaysForecast = ({ isDailyForecast }) => (
  <div>{isDailyForecast ? <DailyForecast /> : <HourlyForecast />}</div>
);

export default DaysForecast;
