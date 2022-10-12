import { useState } from "react";

import { Grid, Space, Col, Row } from "antd";

import { MySearch, MySwitch } from "../UI";
import Calendar from "../calendar";

const { useBreakpoint } = Grid;

const Header = ({ changeForecastOption }) => {
  const screens = useBreakpoint();
  const isMobile = screens.xs;

  const [visible, setVisible] = useState(false);

  return (
    <div
      className="container"
      style={{ backgroundColor: "#434554", padding: 16 }}
    >
      <Row justify="space-around" gutter={[16, 16]}>
        <Col xs={24} sm={12} md={8}>
          <MySearch style={{ textAlign: "left" }} />
        </Col>
        <Col
          xs={24}
          sm={12}
          md={16}
          style={{ textAlign: isMobile ? "center" : "right" }}
        >
          <Space size={8}>
            <Calendar visible={visible} setVisible={setVisible} />
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

export default Header;
