import { Col, Row } from "antd";

import ItemForecast from "./ItemForecast";

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
    <Row justify="space-evenly">
      {items.map((item) => (
        <Col xs={8} sm={8} md={4}>
          <ItemForecast
            key={item.tag}
            info={item.tag}
            icon={item.icon}
            temperature={item.temperature}
          />
        </Col>
      ))}
    </Row>
  );
};

export default DailyForecast;
