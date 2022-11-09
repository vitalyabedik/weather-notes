import { useSelector } from "react-redux";

import { Col, Row } from "antd";

import ItemForecast from "./ItemForecast";
import { getOtherWeekDays } from "../../utils/formatData/formatWeather";
import {
  convertTimestamp,
  setFormat,
  formatWeekday,
} from "../../utils/formatData/formatTimeAndDate";
import getWeatherIcon from "../../utils/getWeatherIcon";

const DailyForecast = () => {
  const weather = useSelector((state) => state.weather.data);

  // const dailyDataWeather = getOtherWeekDays(weather?.daily);
  const dailyDataWeather = weather?.daily.slice(1, 7);
  const days = dailyDataWeather?.map((item) => ({
    id: item.dt,
    name: setFormat(convertTimestamp(item.dt), formatWeekday),
    icon: getWeatherIcon(item?.weather?.[0]?.icon),
    temperature: item?.temp?.day.toFixed(),
  }));

  return (
    <Row justify="space-evenly">
      {days?.map((item) => (
        <Col xs={8} sm={8} md={4}>
          <ItemForecast
            key={item.id}
            info={item.name}
            icon={item.icon}
            temperature={item.temperature}
          />
        </Col>
      ))}
    </Row>
  );
};

export default DailyForecast;
