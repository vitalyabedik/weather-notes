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

const HourlyForecast = () => {
  const [firstElement, setFirstElement] = useState(0);
  const [lastElement, setLastElement] = useState(6);
  const weather = useSelector((state) => state.weather.data);

  const todayName = setFormat(nowDay, formatWeekday);

  const currentDayHours = weather?.hourly?.filter(
    (item) => setFormat(convertTimestamp(item?.dt), formatWeekday) === todayName
  );

  // const currentDayHours = weather?.hourly?.map((item) =>
  //   getCurrentDayName(getCurrentDay(item?.dt))
  // );

  // const currentDayHours = weather?.hourly?.filter(
  //   (item) => getCurrentDayName(getCurrentDay(item?.dt)) === "Mon"
  // );

  // const currentHours = weather?.hourly?.map((item) =>
  //   getCurrentDay(item?.dt).format("HH:mm, dddd, D MMMM")
  // );

  const hours = currentDayHours?.map((item) => ({
    id: item.dt,
    time: setFormat(convertTimestamp(item.dt), formatHourMinute),
    icon: getWeatherIcon(item?.weather?.[0]?.icon),
    temperature: item?.temp.toFixed(),
  }));

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
            setFirstElement(firstElement - 1);
            setLastElement(lastElement - 1);
          }
        }}
      />
      <Button
        className={styles[`hourlyForecast__button-right`]}
        icon={
          <RightOutlined className={styles[`hourlyForecast__button-icon`]} />
        }
        onClick={() => {
          if (lastElement <= sevenHours.length) {
            setFirstElement(firstElement + 1);
            setLastElement(lastElement + 1);
          }
        }}
      />
    </>
  );
};

export default HourlyForecast;
