import { useSelector } from "react-redux";
import { Grid, Row, Col, Typography } from "antd";

import styles from "./LocationInfo.module.scss";
import formatCountryName from "../../utils/formatData/formatCountryName";

const { Text } = Typography;
const { useBreakpoint } = Grid;

const LocationInfo = () => {
  const screens = useBreakpoint();
  const isMobile = screens.xs;

  const currentLocation = useSelector((state) => state.location.data);

  const countryCode = !currentLocation?.[0]?.country
    ? ""
    : currentLocation?.[0]?.country;
  const cityName = currentLocation?.[0]?.name;

  const countryName = formatCountryName(countryCode);

  return (
    <div className={styles.locationInfo}>
      {" "}
      <Row justify={isMobile ? "center" : "end"}>
        <Col className={styles.locationInfo__city}>
          <Text className={styles[`ant-typography`]} strong>
            {cityName}
          </Text>
        </Col>
      </Row>
      <Row justify={isMobile ? "center" : "end"} align="middle">
        <Col className={styles.locationInfo__country}>
          <Text className={styles[`ant-typography`]}>{countryName}</Text>
        </Col>
      </Row>
    </div>
  );
};

export default LocationInfo;
