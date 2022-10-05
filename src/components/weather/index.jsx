import { Col, Row } from "antd";

import styles from "./Weather.module.scss";

import TodayForecast from "./todayForecast";
import DaysForecast from "./days";
import HourlyForecast from "./days/hourlyForecast";

const Weather = ({ showDailyForecast }) => (
  <div className="container">
    <div className={styles.weather}>
      {/* <TodayForecast />

    <DaysForecast /> */}

      <Row align="middle">
        <Col span={6}>
          <TodayForecast />
        </Col>
        <Col span={18}>
          {showDailyForecast ? <DaysForecast /> : <HourlyForecast />}
        </Col>
      </Row>
    </div>
  </div>
);

export default Weather;
