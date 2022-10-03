import { Row, Col } from "antd";

import TodayInfo from "./todayInfo";
import LocationInfo from "./locationInfo";

const CurrentInfo = () => (
  <div className="container" style={{ marginTop: 100, marginBottom: 100 }}>
    <Row justify="space-between">
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
