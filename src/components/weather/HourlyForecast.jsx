import moment from "moment";
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
} from "../../utils/formatData/formatTimeAndDate";
import getWeatherIcon from "../../utils/getWeatherIcon";
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
      moment(item.time).utc().format("D MMMM") === nowDay.format("D MMMM") &&
      nowDay.format("HH") <= moment(item.time).utc().format("HH")
  );

  const dataStormGlass = currentDayHoursStormGlass?.map((item) => ({
    id: moment(item.time).unix(),
    time: moment(item.time).utc().format("HH:mm"),
    temperature: item.airTemperature.sg.toFixed().replace("-0", "0"),
  }));

  // const currentDayHours = weather?.hourly?.map((item) =>
  //   getCurrentDayName(getCurrentDay(item?.dt))
  // );
  // const currentDayHours = weather?.hourly?.filter(
  //   (item) => getCurrentDayName(getCurrentDay(item?.dt)) === "Mon"
  // );

  // const currentHours = weather?.hourly?.map((item) =>
  //   getCurrentDay(item?.dt).format("HH:mm, dddd, D MMMM")
  // );

  const hours = currentDayHoursOpenWeather?.map((item) => ({
    id: item.dt,
    time: setFormat(convertTimestamp(item.dt), formatHourMinute),
    icon: getWeatherIcon(item?.weather?.[0]?.icon),
    temperature: item?.temp.toFixed(),
  }));

  // !!!

  console.log(dataStormGlass);

  // !!!

  const sevenHours = hours.slice(firstElement, lastElement);

  return (
    <>
      <Row className={styles.hourlyForecast} justify="space-around">
        {sevenHours.map((item) => (
          <Col xs={8} sm={8} md={4} key={item.id}>
            <ItemForecast
              info={item.time}
              icon={item.icon}
              temperature={item.temperature}
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
          if (lastElement < hours.length) {
            setFirstElement((prevFirstElement) => prevFirstElement + 1);
            setLastElement((prevLastElement) => prevLastElement + 1);
          }
        }}
      />
    </>
  );
};

export default HourlyForecast;
