import { Col, Row } from "antd";

import styles from "./Weather.module.scss";

import TodayForecast from "./todayForecast";
import DaysForecast from "./days";

const Weather = ({ isDailyForecast }) => (
  <div className="container">
    <div className={styles.weather}>
      <Row align="middle">
        <Col xs={24} sm={8} md={6} lg={5} xl={4}>
          <TodayForecast />
        </Col>
        <Col xs={24} sm={16} md={18} lg={19} xl={20}>
          <DaysForecast isDailyForecast={isDailyForecast} />
        </Col>
      </Row>
    </div>
  </div>
);

export default Weather;
