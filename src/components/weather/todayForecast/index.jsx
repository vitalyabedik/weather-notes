import { Typography, Card, Tag } from "antd";

const { Title } = Typography;
const { Meta } = Card;

const TodayForecast = () => (
  <div className="todayForecast">
    {" "}
    <Card
      style={{
        display: "flex",
        justifyContent: "space-around",
        alignItems: "center",
        backgroundColor: "#434554",
      }}
      bordered={false}
      cover={
        <img
          style={{
            width: 100,
            height: 100,
          }}
          alt="example"
          src="https://cdn-icons-png.flaticon.com/512/5247/5247971.png"
        />
      }
    >
      <Meta
        title=<Tag
          style={{ borderRadius: 15, fontSize: 18, padding: 8 }}
          color="#2e3041"
        >
          TODAY
        </Tag>
        description=<Title
          style={{
            color: "white",
            textAlign: "center",
            fontSize: 50,
          }}
          level={2}
        >
          12&deg;
        </Title>
      />
    </Card>
  </div>
);

export default TodayForecast;
