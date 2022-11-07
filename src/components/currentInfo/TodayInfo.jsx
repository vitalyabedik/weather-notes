import moment from "moment";
import { Grid, Row, Col, Typography } from "antd";

import styles from "./TodayInfo.module.scss";

import {
  now,
  getCurrentDay,
  getCurrentDate,
  getCurrentTime,
} from "../../utils/formatData/formatTimeAndDate";

const { Text } = Typography;
const { useBreakpoint } = Grid;

const TodayInfo = () => {
  const screens = useBreakpoint();
  const isMobile = screens.xs;

  const currentDay = getCurrentDay(1318781876);
  const currentDate = getCurrentDate(currentDay);
  const currentTime = getCurrentTime();

  return (
    <div className={styles.todayInfo}>
      <Row justify={isMobile && "center"} gutter={[8]} align="middle">
        <Col className={styles.locationInfo__time}>
          <Text className={styles[`ant-typography`]} strong>
            {currentTime}
            <span className={styles[`locationInfo__time-pm`]}>
              <Text className={styles[`ant-typography`]}> PM</Text>
            </span>
          </Text>
        </Col>
      </Row>
      <Row justify={isMobile && "center"}>
        <Col className={styles.locationInfo__date}>
          <Text className={styles[`ant-typography`]}>{currentDate}</Text>
        </Col>
      </Row>
    </div>
  );
};

export default TodayInfo;
