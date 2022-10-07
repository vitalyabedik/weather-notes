import { useState } from "react";

import { Space, Col, Row } from "antd";

import { MySearch, MySwitch } from "../UI";
import CreateCalendarEvent from "./createCalendarEvent";

const ActionPanel = ({ changeForecastOption }) => {
  const [visible, setVisible] = useState(false);

  return (
    <div
      className="container"
      style={{ backgroundColor: "#434554", padding: 16 }}
    >
      <Row justify="space-around" gutter={[16, 16]}>
        <Col sm={12}>
          <MySearch style={{ textAlign: "left" }} />
        </Col>
        <Col sm={12} style={{ textAlign: "right" }}>
          <Space size={8}>
            <CreateCalendarEvent visible={visible} setVisible={setVisible} />
            <MySwitch
              checked="Daily"
              unChecked="Hourly"
              onChange={changeForecastOption}
            />
            <MySwitch checked="FirstAPI" unChecked="SecondAPI" />
          </Space>
        </Col>
      </Row>
    </div>
  );
};

export default ActionPanel;
