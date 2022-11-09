import { Grid, Row, Col, Typography } from "antd";

import styles from "./TodayInfo.module.scss";

import {
  nowDay,
  setFormat,
  formatHourMinute,
  formatWeekdayDateMonthYear,
} from "../../utils/formatData/formatTimeAndDate";

const { Text } = Typography;
const { useBreakpoint } = Grid;

const TodayInfo = () => {
  const screens = useBreakpoint();
  const isMobile = screens.xs;

  const currentTime = setFormat(nowDay, formatHourMinute);
  const currentDate = setFormat(nowDay, formatWeekdayDateMonthYear);

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
