import { Typography, Card, Tag } from "antd";

const { Title } = Typography;

const HourlyItem = () => (
  <div className="hourlyForecast__item">
    <Card
      style={{
        backgroundColor: "#434554",
      }}
      bordered={false}
    >
      <Tag
        style={{
          borderRadius: 10,
          marginRight: 0,
          backgroundColor: "#2e3041",
          border: "none",
          color: "white",
        }}
      >
        10:00 today
      </Tag>

      <img
        style={{
          width: 40,
          paddingTop: 20,
          paddingBottom: 10,
        }}
        alt="example"
        src="https://cdn-icons-png.flaticon.com/512/5247/5247971.png"
      />
      <Title style={{ color: "white" }} level={3}>
        12&deg;
      </Title>
    </Card>
  </div>
);

export default HourlyItem;
