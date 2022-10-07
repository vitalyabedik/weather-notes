import { Col, Row } from "antd";

import DaysForecastItem from "../daysForecastItem";

const DailyForecast = () => {
  const items = [
    {
      tag: "Wed",
      icon: "https://cdn-icons-png.flaticon.com/512/5247/5247971.png",
      temperature: 10,
    },
    {
      tag: "Thu",
      icon: "https://cdn-icons-png.flaticon.com/512/5247/5247971.png",
      temperature: 10,
    },
    {
      tag: "Wed",
      icon: "https://cdn-icons-png.flaticon.com/512/5247/5247971.png",
      temperature: 10,
    },
    {
      tag: "Wed",
      icon: "https://cdn-icons-png.flaticon.com/512/5247/5247971.png",
      temperature: 10,
    },
    {
      tag: "Wed",
      icon: "https://cdn-icons-png.flaticon.com/512/5247/5247971.png",
      temperature: 10,
    },
    {
      tag: "Wed",
      icon: "https://cdn-icons-png.flaticon.com/512/5247/5247971.png",
      temperature: 10,
    },
  ];

  return (
    <div className="dailyForecast__list">
      <Row justify="space-evenly">
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

export default DailyForecast;
