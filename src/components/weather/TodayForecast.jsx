import { useSelector } from "react-redux";

import { Grid, Row, Col, Typography, Tag, Image } from "antd";

import {
  getOtherWeekDays,
  getToday,
} from "../../utils/formatData/formatWeather";

import getWeatherIcon from "../../utils/getWeatherIcon";

import styles from "./TodayForecast.module.scss";

const { Text } = Typography;
const { useBreakpoint } = Grid;

const TodayForecast = () => {
  const screens = useBreakpoint();
  const isMobile = screens.xs;

  const weather = useSelector((state) => state.weather.data);
  const location = useSelector((state) => state.location.data);

  // const todayDataWeather = weather?.current;
  // const todayDataWeather = getToday(weather[0]);

  const todayWeather = {
    id: weather?.current?.dt,
    icon: getWeatherIcon(weather?.current?.weather?.[0]?.icon),
    temperature: weather?.current?.temp?.toFixed(),
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
              src={todayWeather.icon}
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
              {todayWeather.temperature}&deg;
            </Text>
          </Col>
        </Row>
      </Row>
    </div>
  );
};

export default TodayForecast;
