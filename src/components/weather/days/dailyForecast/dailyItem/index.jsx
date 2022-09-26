import { Typography, Card, Tag } from "antd";

const { Title } = Typography;

const DailyItem = () => (
  <div className="dailyForecast__item">
    <Card
      style={{
        display: "flex",
        justifyContent: "center",
        backgroundColor: "#434554",
        textAlign: "center",
      }}
      bordered={false}
    >
      <Tag
        style={{
          borderRadius: 13,
          backgroundColor: "#2e3041",
          border: "none",
          color: "white",
          marginRight: 0,

          fontSize: 14,
          padding: 7,
        }}
      >
        Wednesday
      </Tag>

      <img
        style={{
          width: 40,
          paddingTop: 15,
          paddingBottom: 15,
        }}
        alt="weather"
        src="https://cdn-icons-png.flaticon.com/512/5247/5247971.png"
      />
      <Title style={{ color: "white" }} level={2}>
        12&deg;
      </Title>
    </Card>
  </div>
);

export default DailyItem;
