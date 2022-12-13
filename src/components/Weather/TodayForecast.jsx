import { useSelector } from "react-redux";

import { Grid, Row, Col, Typography, Tag, Image } from "antd";

import styles from "./TodayForecast.module.scss";

import getWeatherIcon from "../../utils/getWeatherIcon";
import { selectAllWeatherData } from "../../redux/selectors/weatherSelectors";
import roundNumAndRemoveNegativeZero from "../../utils/roundNumAndRemoveNegativeZero";

const { Text } = Typography;
const { useBreakpoint } = Grid;

const TodayForecast = () => {
  const screens = useBreakpoint();
  const isMobile = screens.xs;

  const { currentOpenWeather } = useSelector(selectAllWeatherData);

  const todayWeather = {
    id: currentOpenWeather?.dt,
    icon: getWeatherIcon(currentOpenWeather?.weather?.[0]?.icon),
    temperature: roundNumAndRemoveNegativeZero(currentOpenWeather?.temp),
  };

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
              src={todayWeather?.icon}
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
              {todayWeather?.temperature}&deg;
            </Text>
          </Col>
        </Row>
      </Row>
    </div>
  );
};

export default TodayForecast;
