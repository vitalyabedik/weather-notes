import { Col, Row } from "antd";

import ItemForecast from "./ItemForecast";

const items = [
  {
    tag: "00:00",
    icon: "https://cdn-icons-png.flaticon.com/512/5247/5247971.png",
    temperature: 10,
  },
  {
    tag: "01:00",
    icon: "https://cdn-icons-png.flaticon.com/512/5247/5247971.png",
    temperature: 10,
  },
  {
    tag: "02:00",
    icon: "https://cdn-icons-png.flaticon.com/512/5247/5247971.png",
    temperature: 10,
  },
  {
    tag: "03:00",
    icon: "https://cdn-icons-png.flaticon.com/512/5247/5247971.png",
    temperature: 10,
  },
  {
    tag: "04:00",
    icon: "https://cdn-icons-png.flaticon.com/512/5247/5247971.png",
    temperature: 10,
  },
  {
    tag: "05:00",
    icon: "https://cdn-icons-png.flaticon.com/512/5247/5247971.png",
    temperature: 10,
  },
  // {
  //   tag: "06:00",
  //   icon: "https://cdn-icons-png.flaticon.com/512/5247/5247971.png",
  //   temperature: 10,
  // },
  // {
  //   tag: "07:00",
  //   icon: "https://cdn-icons-png.flaticon.com/512/5247/5247971.png",
  //   temperature: 10,
  // },
  // {
  //   tag: "08:00",
  //   icon: "https://cdn-icons-png.flaticon.com/512/5247/5247971.png",
  //   temperature: 10,
  // },
  // {
  //   tag: "09:00",
  //   icon: "https://cdn-icons-png.flaticon.com/512/5247/5247971.png",
  //   temperature: 10,
  // },
  // {
  //   tag: "10:00",
  //   icon: "https://cdn-icons-png.flaticon.com/512/5247/5247971.png",
  //   temperature: 10,
  // },
  // {
  //   tag: "11:00",
  //   icon: "https://cdn-icons-png.flaticon.com/512/5247/5247971.png",
  //   temperature: 10,
  // },
  // {
  //   tag: "12:00",
  //   icon: "https://cdn-icons-png.flaticon.com/512/5247/5247971.png",
  //   temperature: 10,
  // },
  // {
  //   tag: "13:00",
  //   icon: "https://cdn-icons-png.flaticon.com/512/5247/5247971.png",
  //   temperature: 10,
  // },
  // {
  //   tag: "14:00",
  //   icon: "https://cdn-icons-png.flaticon.com/512/5247/5247971.png",
  //   temperature: 10,
  // },
  // {
  //   tag: "15:00",
  //   icon: "https://cdn-icons-png.flaticon.com/512/5247/5247971.png",
  //   temperature: 10,
  // },
  // {
  //   tag: "16:00",
  //   icon: "https://cdn-icons-png.flaticon.com/512/5247/5247971.png",
  //   temperature: 10,
  // },
  // {
  //   tag: "17:00",
  //   icon: "https://cdn-icons-png.flaticon.com/512/5247/5247971.png",
  //   temperature: 10,
  // },
  // {
  //   tag: "18:00",
  //   icon: "https://cdn-icons-png.flaticon.com/512/5247/5247971.png",
  //   temperature: 10,
  // },
  // {
  //   tag: "19:00",
  //   icon: "https://cdn-icons-png.flaticon.com/512/5247/5247971.png",
  //   temperature: 10,
  // },
  // {
  //   tag: "20:00",
  //   icon: "https://cdn-icons-png.flaticon.com/512/5247/5247971.png",
  //   temperature: 10,
  // },
];

const HourlyForecast = () => (
  <Row justify="space-around">
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

export default HourlyForecast;
