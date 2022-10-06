import { useState } from "react";

import { Space, Col, Row } from "antd";

import { MySearch, MySwitch } from "../UI";
import CreateCalendarEvent from "./createCalendarEvent";

const ActionPanel = ({ isDailyForecast, changeForecastOption }) => {
  const [visible, setVisible] = useState(false);

  return (
    <div
      className="container"
      style={{ backgroundColor: "#434554", padding: 16 }}
    >
      <Row
        justify="space-between"
        gutter={[16, 16]}
        style={{ textAlign: "center" }}
      >
        <Col>
          <MySearch />
        </Col>
        <Col>
          <Space size={8}>
            <CreateCalendarEvent visible={visible} setVisible={setVisible} />
            <MySwitch
              checked="Daily"
              unChecked="Hourly"
              onChange={() => changeForecastOption(isDailyForecast)}
            />
            <MySwitch checked="FirstAPI" unChecked="SecondAPI" />
          </Space>
        </Col>
      </Row>
    </div>
  );
};

export default ActionPanel;
