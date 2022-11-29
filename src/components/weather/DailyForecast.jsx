import { useSelector } from "react-redux";

import { Col, Row } from "antd";

import ItemForecast from "./ItemForecast";
import {
  convertTimestamp,
  setFormat,
  formatWeekday,
} from "../../utils/formatData/formatTimeAndDate";
import getWeatherIcon from "../../utils/getWeatherIcon";
import { selectAllWeatherData } from "../../redux/selectors/weatherSelectors";

const DailyForecast = () => {
  const { dailyOpenWeather } = useSelector(selectAllWeatherData);

  const days = dailyOpenWeather?.slice(1, 7)?.map((item) => ({
    id: item.dt,
    name: setFormat(convertTimestamp(item.dt), formatWeekday),
    icon: getWeatherIcon(item?.weather?.[0]?.icon),
    temperature: item?.temp?.day.toFixed(),
  }));

  return (
    <Row justify="space-evenly">
      {days?.map((item) => (
        <Col xs={8} sm={8} md={4} key={item.id}>
          <ItemForecast
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
