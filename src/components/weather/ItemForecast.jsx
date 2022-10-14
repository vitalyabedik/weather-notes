import { Typography, Card, Tag, Row, Col } from "antd";

const { Title } = Typography;

const ItemForecast = ({ info, icon, temperature }) => (
  <div className="dailyForecast__item">
    <Card bordered={false}>
      <Row justify="center">
        <Col>
          {" "}
          <Tag
            style={{
              borderRadius: 10,
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
              width: 40,
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
          <Title level={4}>{temperature}&deg;</Title>
        </Col>
      </Row>
    </Card>
  </div>
);

export default ItemForecast;
