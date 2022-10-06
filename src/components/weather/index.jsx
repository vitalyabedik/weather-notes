import { Col, Row } from "antd";

import styles from "./Weather.module.scss";

import TodayForecast from "./todayForecast";
import DaysForecast from "./days";
import HourlyForecast from "./days/hourlyForecast";

const Weather = ({ isDailyForecast }) => (
  <div className="container">
    <div className={styles.weather}>
      <Row align="middle">
        <Col span={6}>
          <TodayForecast />
        </Col>
        <Col span={18}>
          {isDailyForecast ? <DaysForecast /> : <HourlyForecast />}
        </Col>
      </Row>
    </div>
  </div>
);

export default Weather;
