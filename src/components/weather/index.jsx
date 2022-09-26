import { Col, Row } from "antd";

import styles from "./Weather.module.scss";

import TodayForecast from "./todayForecast";
import DaysForecast from "./days";

const Weather = () => (
  <div className="container">
    <div className={styles.weather}>
      {/* <TodayForecast />

    <DaysForecast /> */}

      <Row align="middle">
        <Col span={6}>
          <TodayForecast />
        </Col>
        <Col span={18}>
          <DaysForecast />
        </Col>
      </Row>
    </div>
  </div>
);

export default Weather;
