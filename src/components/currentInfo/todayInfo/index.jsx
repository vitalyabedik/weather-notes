import { Row, Col, Typography } from "antd";

const { Title } = Typography;

const TodayInfo = () => (
  <>
    <Row gutter={[8]} align="middle">
      <Col>
        <Title style={{ color: "white" }} level={1}>
          12:30
        </Title>
      </Col>
      <Col>
        <Title style={{ color: "white" }} level={4}>
          PM
        </Title>
      </Col>
    </Row>
    <Row>
      <Col>
        <Title level={4} style={{ color: "white" }}>
          Monday, 3 October 2022
        </Title>
      </Col>
    </Row>
  </>
);

export default TodayInfo;
