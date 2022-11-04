import { Grid, Row, Col, Typography, Tag, Image } from "antd";
import { useSelector } from "react-redux";

import styles from "./TodayForecast.module.scss";

const { Text } = Typography;
const { useBreakpoint } = Grid;

const TodayForecast = () => {
  const screens = useBreakpoint();
  const isMobile = screens.xs;

  const weather = useSelector((state) => state.weather.data);
  const location = useSelector((state) => state.location.data);
  // const weatherData = storeData.data;

  const countryInEnglish = new Intl.DisplayNames("en", { type: "region" }).of(
    "BY"
  );

  // console.log(weather);
  // console.log(location);
  // console.log(countryInEnglish);

  return (
    <div className={styles.todayForecast}>
      <Row
        className={isMobile && styles.todayForecast__items}
        justify={isMobile ? "center" : "space-evenly"}
        align="middle"
      >
        <Row>
          <Col span={24}>
            <Image
              src="https://cdn-icons-png.flaticon.com/512/5247/5247971.png"
              width={55}
              alt="example"
              preview={false}
            />
          </Col>
        </Row>
        <Row className={styles[`todayForecast__items-info`]}>
          <Col span={24}>
            {" "}
            <Tag className={styles[`ant-tag`]}>TODAY</Tag>
          </Col>
          <Col span={24}>
            {" "}
            <Text className={styles[`ant-typography`]} strong>
              12&deg;
            </Text>
          </Col>
        </Row>
      </Row>
    </div>
  );
};

export default TodayForecast;
