import { Row, Col } from "antd";

import styles from "./CurrentInfo.module.scss";

import TodayInfo from "./TodayInfo";
import LocationInfo from "./LocationInfo";

const CurrentInfo = () => (
  <Row className={styles.currentInfo} align="middle">
    <Col xs={24} sm={12}>
      <TodayInfo />
    </Col>
    <Col xs={24} sm={12}>
      <LocationInfo />
    </Col>
  </Row>
);

export default CurrentInfo;
