import moment from "moment";
import { useState, useEffect } from "react";

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

  const [time, setTime] = useState();

  const currentDate = setFormat(nowDay, formatWeekdayDateMonthYear);

  useEffect(() => {
    setInterval(() => {
      setTime(setFormat(moment(), formatHourMinute));
    }, 1000);
  });

  return (
    <div className={styles.todayInfo}>
      <Row justify={isMobile && "center"} gutter={[8]} align="middle">
        <Col className={styles.locationInfo__time}>
          <Text className={styles[`ant-typography`]} strong>
            {time}
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
