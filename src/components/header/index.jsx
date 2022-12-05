import { useState, useEffect } from "react";
import { useSelector } from "react-redux";

import { Grid, Space, Col, Row, Form, Input, Button } from "antd";
import { SearchOutlined } from "@ant-design/icons";

import styles from "./Header.module.scss";

import { MySwitch } from "../UI";
import Calendar from "../Сalendar";
import { selectAllWeatherData } from "../../redux/selectors/weatherSelectors";
import useActions from "../../hooks/useActions";

const { useBreakpoint } = Grid;

const Header = () => {
  const screens = useBreakpoint();
  const isMobile = screens.xs;

  const [form] = Form.useForm();

  const {
    getWeatherForecastByCityName,
    changeOptionForecast,
    changeOptionAPI,
    getWeatherForecastStormGlass,
    getWeatherForecastStormGlassByCityName,
  } = useActions();

  const { isDailyForecast, isBasicAPI } = useSelector((store) => store.app);
  const { lat, lon } = useSelector((state) => state.location.data[0]);
  const { hourlyStormGlass } = useSelector(selectAllWeatherData);

  const [city, setCity] = useState("");

  const changeHandler = (e) => {
    setCity(e.target.value);
  };

  const onFinish = () => {
    getWeatherForecastByCityName(city);
    setCity("");
  };

  const handleChangeForecast = () => {
    changeOptionForecast(!isDailyForecast);
  };

  const handleChangeAPI = () => {
    changeOptionAPI(!isBasicAPI);
  };

  // useEffect(() => {
  //   // if (!hourlyStormGlass && !isBasicAPI) {
  //   if (!hourlyStormGlass && !isBasicAPI) {
  //     console.log(lat, lon);
  //     getWeatherForecastStormGlass(lat, lon);
  //     // getWeatherForecastStormGlassByCityName(city);
  //   }
  // }, [isBasicAPI]);

  return (
    <div className={styles.header}>
      <Row justify="space-around" gutter={[16, 16]}>
        <Col xs={24} sm={12} md={8}>
          <Form
            className={styles.header__form}
            form={form}
            autoComplete="off"
            onFinish={onFinish}
          >
            <Input
              value={city}
              onChange={changeHandler}
              placeholder="Enter a city..."
              autoFocus
              allowClear
            />
            <Button htmlType="submit" icon={<SearchOutlined />} />
          </Form>
        </Col>
        <Col
          className={
            isMobile
              ? styles[`header__items-center`]
              : styles[`header__items-right`]
          }
          xs={24}
          sm={12}
          md={16}
        >
          <Space size={8}>
            <Calendar />
            <MySwitch
              checked="Daily"
              unChecked="Hourly"
              onChange={handleChangeForecast}
            />
            <MySwitch
              checked="FirstAPI"
              unChecked="SecondAPI"
              onChange={handleChangeAPI}
            />
          </Space>
        </Col>
      </Row>
    </div>
  );
};

export default Header;
