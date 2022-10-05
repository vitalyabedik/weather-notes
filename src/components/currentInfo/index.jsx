import { Row, Col } from "antd";

import TodayInfo from "./todayInfo";
import LocationInfo from "./locationInfo";

const CurrentInfo = () => (
  <div
    className="container"
    style={{ marginTop: 50, marginBottom: 50, background: "none" }}
  >
    <Row justify="space-between" align="middle">
      <Col>
        <TodayInfo />
      </Col>
      <Col>
        <LocationInfo />
      </Col>
    </Row>
  </div>
);

export default CurrentInfo;
