import { Col, Row } from "antd";

import DaysForecastItem from "../daysForecastItem";

const HourlyForecast = () => {
  const items = [
    {
      tag: "10:00",
      icon: "https://cdn-icons-png.flaticon.com/512/5247/5247971.png",
      temperature: 10,
    },
    {
      tag: "10:00",
      icon: "https://cdn-icons-png.flaticon.com/512/5247/5247971.png",
      temperature: 10,
    },
    {
      tag: "10:00",
      icon: "https://cdn-icons-png.flaticon.com/512/5247/5247971.png",
      temperature: 10,
    },
    {
      tag: "10:00",
      icon: "https://cdn-icons-png.flaticon.com/512/5247/5247971.png",
      temperature: 10,
    },
    {
      tag: "10:00",
      icon: "https://cdn-icons-png.flaticon.com/512/5247/5247971.png",
      temperature: 10,
    },
    {
      tag: "10:00",
      icon: "https://cdn-icons-png.flaticon.com/512/5247/5247971.png",
      temperature: 10,
    },
  ];

  return (
    <div className="dailyForecast__list">
      <Row justify="space-around">
        {items.map((item) => (
          <Col span={3}>
            <div>
              <DaysForecastItem
                key={item.tag}
                info={item.tag}
                icon={item.icon}
                temperature={item.temperature}
              />
            </div>
          </Col>
        ))}
      </Row>
    </div>
  );
};

export default HourlyForecast;
