import { useState } from "react";
import { useSelector } from "react-redux";

import { Button, Col, Row } from "antd";
import { LeftOutlined, RightOutlined } from "@ant-design/icons";

import styles from "./HourlyForecast.module.scss";

import ItemForecast from "./ItemForecast";
import {
  nowDay,
  convertTimestamp,
  setFormat,
  formatHourMinute,
  formatWeekday,
  formatDateMonth,
  formatHour,
  getCurrentTimeUTC,
  convertToTimestamp,
} from "../../utils/formatData/formatTimeAndDate";
import getWeatherIcon from "../../utils/getWeatherIcon";
import roundNumAndRemoveNegativeZero from "../../utils/roundNumAndRemoveNegativeZero";
import changeTemperature from "../../utils/changeTemperature";
import { selectAllWeatherData } from "../../redux/selectors/weatherSelectors";

const HourlyForecast = () => {
  const [firstElement, setFirstElement] = useState(0);
  const [lastElement, setLastElement] = useState(6);

  const { isBasicAPI } = useSelector((store) => store.app);
  const { hourlyOpenWeather, hourlyStormGlass } =
    useSelector(selectAllWeatherData);

  const todayName = setFormat(nowDay, formatWeekday);

  const currentDayHoursOpenWeather = hourlyOpenWeather?.filter(
    (item) => setFormat(convertTimestamp(item?.dt), formatWeekday) === todayName
  );

  const currentDayHoursStormGlass = hourlyStormGlass?.filter(
    (item) =>
      getCurrentTimeUTC(item?.time, formatDateMonth) ===
        setFormat(nowDay, formatDateMonth) &&
      setFormat(nowDay, formatHour) <= getCurrentTimeUTC(item?.time, formatHour)
  );

  const hoursStormGlass = currentDayHoursStormGlass?.map((item) => ({
    id: convertToTimestamp(item?.time),
    time: getCurrentTimeUTC(item?.time, formatHourMinute),
    temperature: roundNumAndRemoveNegativeZero(item?.airTemperature.sg),
  }));

  const hoursOpenWeather = currentDayHoursOpenWeather?.map((item) => ({
    id: item?.dt,
    time: setFormat(convertTimestamp(item?.dt), formatHourMinute),
    icon: getWeatherIcon(item?.weather?.[0]?.icon),
    temperature: roundNumAndRemoveNegativeZero(item?.temp),
  }));

  const hours = isBasicAPI
    ? hoursOpenWeather
    : changeTemperature(hoursOpenWeather, hoursStormGlass);

  const currentHours = hours?.slice(firstElement, lastElement);

  return (
    <>
      <Row className={styles.hourlyForecast} justify="space-around">
        {currentHours?.map((item) => (
          <Col xs={8} sm={8} md={4} key={item.id}>
            <ItemForecast
              info={item?.time}
              icon={item?.icon}
              temperature={item?.temperature}
            />
          </Col>
        ))}
      </Row>
      <Button
        className={styles[`hourlyForecast__button-left`]}
        icon={
          <LeftOutlined className={styles[`hourlyForecast__button-icon`]} />
        }
        onClick={() => {
          if (firstElement > 0) {
            setFirstElement((prevFirstElement) => prevFirstElement - 1);
            setLastElement((prevLastElement) => prevLastElement - 1);
          }
        }}
      />
      <Button
        className={styles[`hourlyForecast__button-right`]}
        icon={
          <RightOutlined className={styles[`hourlyForecast__button-icon`]} />
        }
        onClick={() => {
          if (lastElement < hoursOpenWeather.length) {
            setFirstElement((prevFirstElement) => prevFirstElement + 1);
            setLastElement((prevLastElement) => prevLastElement + 1);
          }
        }}
      />
    </>
  );
};

export default HourlyForecast;
