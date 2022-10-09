import { Grid, Row, Col, Typography } from "antd";

const { Title } = Typography;
const { useBreakpoint } = Grid;

const LocationInfo = () => {
  const screens = useBreakpoint();
  const isMobile = screens.xs;

  return (
    <>
      {" "}
      <Row justify={isMobile ? "center" : "end"}>
        <Col>
          <Title style={{ color: "white" }} level={3}>
            Soligorsk
          </Title>
        </Col>
      </Row>
      <Row justify={isMobile ? "center" : "end"} align="middle">
        <Col>
          <Title level={4} style={{ color: "white" }}>
            Belarus
          </Title>
        </Col>
      </Row>
    </>
  );
};

export default LocationInfo;
