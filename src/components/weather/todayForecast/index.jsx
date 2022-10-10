import { Grid, Typography, Tag, Row, Col } from "antd";

const { Title } = Typography;
const { useBreakpoint } = Grid;

const TodayForecast = () => {
  const screens = useBreakpoint();
  const isMobile = screens.xs;

  return (
    <div className="todayForecast">
      <Row
        justify={isMobile ? "center" : "space-evenly"}
        align="middle"
        style={{ textAlign: "center", paddingTop: isMobile && 20 }}
      >
        <Row>
          <Col span={24}>
            <img
              style={{
                width: 55,
                align: "center",
              }}
              alt="example"
              src="https://cdn-icons-png.flaticon.com/512/5247/5247971.png"
            />
          </Col>
        </Row>

        <Row>
          <Col span={24}>
            {" "}
            <Tag
              style={{
                borderRadius: 15,
                fontSize: 14,
                padding: 8,
                color: "white",
                background: "#2e3041",
                border: "none",
              }}
            >
              TODAY
            </Tag>
          </Col>
          <Col span={24}>
            {" "}
            <Title
              style={{
                color: "white",
                margin: 0,
              }}
              level={2}
            >
              12&deg;
            </Title>
          </Col>
        </Row>
      </Row>
    </div>
  );
};

export default TodayForecast;
