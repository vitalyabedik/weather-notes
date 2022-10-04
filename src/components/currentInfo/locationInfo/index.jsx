import { Row, Col, Typography } from "antd";

const { Title } = Typography;

const LocationInfo = () => (
  <>
    {" "}
    <Row justify="end">
      <Col>
        <Title style={{ color: "white" }} level={3}>
          Soligorsk
        </Title>
      </Col>
    </Row>
    <Row justify="end" align="middle">
      <Col>
        <Title level={4} style={{ color: "white" }}>
          Belarus
        </Title>
      </Col>
    </Row>
  </>
);

export default LocationInfo;
