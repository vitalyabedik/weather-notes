import { Typography, Card, Tag, Row, Col } from "antd";

const { Title } = Typography;

const DaysForecastItem = ({ info, icon, temperature }) => (
  <div className="dailyForecast__item">
    <Card
      style={{
        backgroundColor: "#434554",
      }}
      bordered={false}
    >
      <Row justify="center">
        <Col>
          {" "}
          <Tag
            style={{
              borderRadius: 10,
              backgroundColor: "#2e3041",
              border: "none",
              color: "white",
              marginRight: 0,
            }}
          >
            {info}
          </Tag>
        </Col>
      </Row>
      <Row justify="center">
        <Col>
          {" "}
          <img
            style={{
              width: 45,
              paddingTop: 15,
              paddingBottom: 15,
            }}
            alt="weather"
            src={icon}
          />
        </Col>
      </Row>
      <Row justify="center">
        {" "}
        <Col>
          {" "}
          <Title style={{ color: "white", marginBottom: 0 }} level={3}>
            {temperature}&deg;
          </Title>
        </Col>
      </Row>
    </Card>
  </div>
);

export default DaysForecastItem;
