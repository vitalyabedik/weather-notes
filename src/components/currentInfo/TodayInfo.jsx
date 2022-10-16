import { Grid, Row, Col, Typography } from "antd";

import styles from "./TodayInfo.module.scss";

const { Text } = Typography;
const { useBreakpoint } = Grid;

const TodayInfo = () => {
  const screens = useBreakpoint();
  const isMobile = screens.xs;

  return (
    <div className={styles.todayInfo}>
      <Row justify={isMobile && "center"} gutter={[8]} align="middle">
        <Col className={styles.locationInfo__time}>
          <Text className={styles[`ant-typography`]} strong>
            12:30{" "}
            <span className={styles[`locationInfo__time-pm`]}>
              <Text className={styles[`ant-typography`]}>PM</Text>
            </span>
          </Text>
        </Col>
      </Row>
      <Row justify={isMobile && "center"}>
        <Col className={styles.locationInfo__date}>
          <Text className={styles[`ant-typography`]}>
            Monday, 3 October 2022
          </Text>
        </Col>
      </Row>
    </div>
  );
};

export default TodayInfo;
