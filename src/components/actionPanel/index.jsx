import { useState } from "react";

import { Col, Row, Typography } from "antd";

import { MySearch, MySwitch } from "../UI";
import CreateCalendarEvent from "./createCalendarEvent";

const { Title } = Typography;

const ActionPanel = () => {
  const [visible, setVisible] = useState(false);

  return (
    <div style={{ backgroundColor: "#434554", padding: 20 }}>
      <Row align="middle">
        <Col span={4}>
          <Row justify="center">
            <Col>
              <Title level={2} style={{ color: "white" }}>
                React Weather Forecast{" "}
              </Title>
            </Col>
          </Row>
        </Col>
        <Col span={14}>
          <Row
            justify="space-evenly"
            gutter={[16, 16]}
            style={{ textAlign: "center" }}
          >
            <Col>
              <Title style={{ color: "white" }} level={4}>
                Create New Event
              </Title>
              <CreateCalendarEvent visible={visible} setVisible={setVisible} />
            </Col>
            <Col>
              <Title style={{ color: "white" }} level={4}>
                Change Forecast Location
              </Title>
              <MySearch />
            </Col>
          </Row>
        </Col>
        <Col span={6}>
          <Row
            justify="space-evenly"
            gutter={[16, 16]}
            style={{ textAlign: "center" }}
          >
            <Col>
              <Title style={{ color: "white" }} level={4}>
                Forecast Changer
              </Title>
              <MySwitch
                checked="Show Daily Forecast"
                unChecked="Show Hourly Forecast"
              />
            </Col>
            <Col>
              <Title style={{ color: "white" }} level={4}>
                API Changer
              </Title>
              <MySwitch checked="FirstAPI" unChecked="SecondAPI" />
            </Col>
          </Row>
        </Col>
      </Row>
    </div>
  );
};

export default ActionPanel;
