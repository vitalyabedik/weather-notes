import { Grid, Row, Col, Typography } from "antd";

import styles from "./LocationInfo.module.scss";

const { Text } = Typography;
const { useBreakpoint } = Grid;

const LocationInfo = () => {
  const screens = useBreakpoint();
  const isMobile = screens.xs;

  return (
    <div className={styles.locationInfo}>
      {" "}
      <Row justify={isMobile ? "center" : "end"}>
        <Col className={styles.locationInfo__city}>
          <Text className={styles[`ant-typography`]} strong>
            Soligorsk
          </Text>
        </Col>
      </Row>
      <Row justify={isMobile ? "center" : "end"} align="middle">
        <Col className={styles.locationInfo__country}>
          <Text className={styles[`ant-typography`]}>Belarus</Text>
        </Col>
      </Row>
    </div>
  );
};

export default LocationInfo;
