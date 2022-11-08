import { useState } from "react";
import { useSelector } from "react-redux";

import { Button, Col, Row } from "antd";
import { LeftOutlined, RightOutlined } from "@ant-design/icons";
import styles from "./HourlyForecast.module.scss";

import ItemForecast from "./ItemForecast";
import {
  getCurrentDay,
  getCurrentDayName,
  getCurrentTime,
} from "../../utils/formatData/formatTimeAndDate";
import getWeatherIcon from "../../utils/getWeatherIcon";

const items = [
  {
    tag: "00:00",
    icon: "https://cdn-icons-png.flaticon.com/512/5247/5247971.png",
    temperature: 10,
  },
  {
    tag: "01:00",
    icon: "https://cdn-icons-png.flaticon.com/512/5247/5247971.png",
    temperature: 10,
  },
  {
    tag: "02:00",
    icon: "https://cdn-icons-png.flaticon.com/512/5247/5247971.png",
    temperature: 10,
  },
  {
    tag: "03:00",
    icon: "https://cdn-icons-png.flaticon.com/512/5247/5247971.png",
    temperature: 10,
  },
  {
    tag: "04:00",
    icon: "https://cdn-icons-png.flaticon.com/512/5247/5247971.png",
    temperature: 10,
  },
  {
    tag: "05:00",
    icon: "https://cdn-icons-png.flaticon.com/512/5247/5247971.png",
    temperature: 10,
  },
  // {
  //   tag: "06:00",
  //   icon: "https://cdn-icons-png.flaticon.com/512/5247/5247971.png",
  //   temperature: 10,
  // },
  // {
  //   tag: "07:00",
  //   icon: "https://cdn-icons-png.flaticon.com/512/5247/5247971.png",
  //   temperature: 10,
  // },
  // {
  //   tag: "08:00",
  //   icon: "https://cdn-icons-png.flaticon.com/512/5247/5247971.png",
  //   temperature: 10,
  // },
  // {
  //   tag: "09:00",
  //   icon: "https://cdn-icons-png.flaticon.com/512/5247/5247971.png",
  //   temperature: 10,
  // },
  // {
  //   tag: "10:00",
  //   icon: "https://cdn-icons-png.flaticon.com/512/5247/5247971.png",
  //   temperature: 10,
  // },
  // {
  //   tag: "11:00",
  //   icon: "https://cdn-icons-png.flaticon.com/512/5247/5247971.png",
  //   temperature: 10,
  // },
  // {
  //   tag: "12:00",
  //   icon: "https://cdn-icons-png.flaticon.com/512/5247/5247971.png",
  //   temperature: 10,
  // },
  // {
  //   tag: "13:00",
  //   icon: "https://cdn-icons-png.flaticon.com/512/5247/5247971.png",
  //   temperature: 10,
  // },
  // {
  //   tag: "14:00",
  //   icon: "https://cdn-icons-png.flaticon.com/512/5247/5247971.png",
  //   temperature: 10,
  // },
  // {
  //   tag: "15:00",
  //   icon: "https://cdn-icons-png.flaticon.com/512/5247/5247971.png",
  //   temperature: 10,
  // },
  // {
  //   tag: "16:00",
  //   icon: "https://cdn-icons-png.flaticon.com/512/5247/5247971.png",
  //   temperature: 10,
  // },
  // {
  //   tag: "17:00",
  //   icon: "https://cdn-icons-png.flaticon.com/512/5247/5247971.png",
  //   temperature: 10,
  // },
  // {
  //   tag: "18:00",
  //   icon: "https://cdn-icons-png.flaticon.com/512/5247/5247971.png",
  //   temperature: 10,
  // },
  // {
  //   tag: "19:00",
  //   icon: "https://cdn-icons-png.flaticon.com/512/5247/5247971.png",
  //   temperature: 10,
  // },
  // {
  //   tag: "20:00",
  //   icon: "https://cdn-icons-png.flaticon.com/512/5247/5247971.png",
  //   temperature: 10,
  // },
];

const HourlyForecast = () => {
  const [firstElement, setFirstElement] = useState(0);
  const [lastElement, setLastElement] = useState(6);
  const weather = useSelector((state) => state.weather.data);

  // const currentDayHours = weather?.hourly?.map((item) =>
  //   getCurrentDayName(getCurrentDay(item?.dt))
  // );
  const currentDayHours = weather?.hourly?.filter(
    (item) => getCurrentDayName(getCurrentDay(item?.dt)) === "Tue"
  );
  // const currentDayHours = weather?.hourly?.filter(
  //   (item) => getCurrentDayName(getCurrentDay(item?.dt)) === "Mon"
  // );
  // const currentHours = weather?.hourly?.map((item) =>
  //   getCurrentDay(item?.dt).format("HH:mm, dddd, D MMMM")
  // );

  const hours = currentDayHours?.map((item) => ({
    id: item.dt,
    time: getCurrentTime(getCurrentDay(item.dt)),
    icon: getWeatherIcon(item?.weather?.[0]?.icon),
    temperature: item?.temp.toFixed(),
  }));

  const sevenHours = hours.slice(firstElement, lastElement);

  return (
    <>
      <Row className={styles.hourlyForecast} justify="space-around">
        {sevenHours.map((item) => (
          <Col xs={8} sm={8} md={4}>
            <ItemForecast
              key={item.id}
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
