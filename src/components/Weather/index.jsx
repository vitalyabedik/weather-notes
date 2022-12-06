import { useSelector } from "react-redux";

import { Col, Row } from "antd";

import styles from "./Weather.module.scss";

import TodayForecast from "./TodayForecast";
import DailyForecast from "./DailyForecast";
import HourlyForecast from "./HourlyForecast";

const Weather = () => {
  const { isDailyForecast } = useSelector((store) => store.app);

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
