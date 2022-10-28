import { useState, useEffect } from "react";
import { Col, Row } from "antd";

import styles from "./Weather.module.scss";

import TodayForecast from "./TodayForecast";
import DailyForecast from "./DailyForecast";
import HourlyForecast from "./HourlyForecast";

const Weather = ({ isDailyForecast }) => {
  const [weatherDate, setWeatherData] = useState();

  // const [lat, setLat] = useState([]);
  // const [long, setLong] = useState([]);

  // useEffect(() => {
  //   navigator.geolocation.getCurrentPosition((position) => {
  //     setLat(position.coords.latitude);
  //     setLong(position.coords.longitude);
  //   });

  //   console.log("Latitude is:", lat);
  //   console.log("Longitude is:", long);
  // }, [lat, long]);

  // const lon = -80.0;
  // const lat = 40.0;
  // const APIKey = "b9ac83fce506bd99363a07a936631208";

  // useEffect(() => {
  // const API = `https://api.openweathermap.org/data/2.5/weather?lat=${lat}&lon=${lon}&units=metric&appid=${APIKey}`;
  //   fetch(API)
  //     .then((res) => res.json())
  //     .then((data) => {
  //       console.log(data);
  //     });
  // }, []);

  return (
    <div className={styles.weather}>
      <Row align="middle">
        <Col xs={24} sm={8} md={6} lg={5} xl={4}>
          <TodayForecast />
        </Col>
        <Col xs={24} sm={16} md={18} lg={19} xl={20}>
          <div>{isDailyForecast ? <DailyForecast /> : <HourlyForecast />}</div>
        </Col>
      </Row>
    </div>
  );
};

export default Weather;
