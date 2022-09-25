import { Col, Row } from "antd";

import DailyItem from "../dailyItem";

const DailyList = () => (
  <div className="dailyForecast__list">
    <Row justify="space-around">
      <Col span={3}>
        <div>
          <DailyItem />
        </div>
      </Col>
      <Col span={3}>
        <div>
          <DailyItem />
        </div>
      </Col>
      <Col span={3}>
        <div>
          <DailyItem />
        </div>
      </Col>
      <Col span={3}>
        <div>
          <DailyItem />
        </div>
      </Col>
      <Col span={3}>
        <div>
          <DailyItem />
        </div>
      </Col>
      <Col span={3}>
        <div>
          <DailyItem />
        </div>
      </Col>
    </Row>
  </div>
);

export default DailyList;
