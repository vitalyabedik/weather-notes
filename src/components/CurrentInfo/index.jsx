import { Row, Col } from "antd";

import styles from "./CurrentInfo.module.scss";

import TodayInfo from "./TodayInfo";
import LocationInfo from "./LocationInfo";

const CurrentInfo = () => (
  <div className={styles.currentInfo}>
    <Row align="middle">
      <Col xs={24} sm={18} md={12}>
        <TodayInfo />
      </Col>
      <Col xs={24} sm={6} md={12}>
        <LocationInfo />
      </Col>
    </Row>
  </div>
);

export default CurrentInfo;
