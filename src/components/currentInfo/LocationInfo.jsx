import { useSelector } from "react-redux";
import { Grid, Row, Col, Typography } from "antd";

import styles from "./LocationInfo.module.scss";

const { Text } = Typography;
const { useBreakpoint } = Grid;

const LocationInfo = () => {
  const screens = useBreakpoint();
  const isMobile = screens.xs;

  const currentLocation = useSelector((state) => state.location.data);

  const shotCurrentCountryName = currentLocation?.[0]?.country;
  const currentTownName = currentLocation?.[0]?.name;

  const language = "en";
  const shotCountry = "BY";

  const fullCurrentCountryNameEnglish = new Intl.DisplayNames(language, {
    type: "region",
  }).of(shotCountry);

  return (
    <div className={styles.locationInfo}>
      {" "}
      <Row justify={isMobile ? "center" : "end"}>
        <Col className={styles.locationInfo__city}>
          <Text className={styles[`ant-typography`]} strong>
            {currentTownName}
          </Text>
        </Col>
      </Row>
      <Row justify={isMobile ? "center" : "end"} align="middle">
        <Col className={styles.locationInfo__country}>
          <Text className={styles[`ant-typography`]}>
            {fullCurrentCountryNameEnglish}
          </Text>
        </Col>
      </Row>
    </div>
  );
};

export default LocationInfo;
