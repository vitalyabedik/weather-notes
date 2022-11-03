import moment from "moment";
import { Grid, Row, Col, Typography } from "antd";

import styles from "./TodayInfo.module.scss";

const { Text } = Typography;
const { useBreakpoint } = Grid;

const TodayInfo = () => {
  const screens = useBreakpoint();
  const isMobile = screens.xs;

  const nowDateInfo = moment().format("dddd, D MMMM YYYY");
  const nowTimeInfo = moment().format("HH:MM");

  return (
    <div className={styles.todayInfo}>
      <Row justify={isMobile && "center"} gutter={[8]} align="middle">
        <Col className={styles.locationInfo__time}>
          <Text className={styles[`ant-typography`]} strong>
            {nowTimeInfo}
            <span className={styles[`locationInfo__time-pm`]}>
              <Text className={styles[`ant-typography`]}>PM</Text>
            </span>
          </Text>
        </Col>
      </Row>
      <Row justify={isMobile && "center"}>
        <Col className={styles.locationInfo__date}>
          <Text className={styles[`ant-typography`]}>{nowDateInfo}</Text>
        </Col>
      </Row>
    </div>
  );
};

export default TodayInfo;
