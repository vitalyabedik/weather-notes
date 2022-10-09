import { Grid, Row, Col } from "antd";

import TodayInfo from "./todayInfo";
import LocationInfo from "./locationInfo";

const { useBreakpoint } = Grid;

const CurrentInfo = () => {
  const screens = useBreakpoint();
  const isMobile = screens.xs;

  return (
    <div
      className="container"
      style={{ marginTop: 50, marginBottom: 50, background: "none" }}
    >
      <Row align="middle">
        <Col xs={24} sm={12}>
          <TodayInfo />
        </Col>
        <Col xs={24} sm={12}>
          <LocationInfo />
        </Col>
      </Row>
    </div>
  );
};

export default CurrentInfo;
