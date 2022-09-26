import { Col, Row, Typography } from "antd";

// import SelectorDate from "./selectorDate";
import SelectorForecast from "./selectorForecast";
import SearchLocation from "./searchLocation";
import ChangeApi from "./changeApi";
import CreateCalendarEvent from "./createCalendarEvent";

const { Title } = Typography;

const ActionPanel = () => (
  <div style={{ backgroundColor: "#434554", padding: 20 }}>
    <Row align="middle">
      <Col span={4}>
        <Row justify="center">
          <Col>
            <Title level={2} style={{ color: "white" }}>
              React Weather Forecast{" "}
            </Title>
          </Col>
        </Row>
      </Col>
      <Col span={14}>
        <Row
          justify="space-evenly"
          gutter={[16, 16]}
          style={{ textAlign: "center" }}
        >
          <Col>
            <Title style={{ color: "white" }} level={4}>
              Create New Event
            </Title>
            <CreateCalendarEvent />
          </Col>
          <Col>
            <Title style={{ color: "white" }} level={4}>
              Change Forecast Location
            </Title>
            <SearchLocation />
          </Col>
        </Row>
      </Col>
      <Col span={6}>
        <Row
          justify="space-evenly"
          gutter={[16, 16]}
          style={{ textAlign: "center" }}
        >
          <Col>
            <Title style={{ color: "white" }} level={4}>
              Forecast Changer
            </Title>
            <SelectorForecast />
          </Col>
          <Col>
            <Title style={{ color: "white" }} level={4}>
              API Changer
            </Title>
            <ChangeApi />
          </Col>
        </Row>
      </Col>
    </Row>
  </div>
);

export default ActionPanel;
