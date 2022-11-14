import { useState } from "react";
import { useDispatch, useSelector } from "react-redux";

import { Grid, Space, Col, Row, Form, Input, Button } from "antd";

import styles from "./Header.module.scss";

import { MySearch, MySwitch } from "../UI";
import Calendar from "../calendar";
import {
  getWeatherByCityName,
  loadWeather,
  setWeatherLoading,
} from "../../redux/actions/weatherAction";
import { loadWeatherByCity } from "../../redux/actions/locationAction";

const { useBreakpoint } = Grid;

const Header = ({ changeForecastOption }) => {
  const screens = useBreakpoint();
  const isMobile = screens.xs;

  const [form] = Form.useForm();

  const [visible, setVisible] = useState(false);
  const [city, setCity] = useState("");

  const weather = useSelector((store) => store.weather.data);
  const location = useSelector((store) => store.location);
  const dispatch = useDispatch();

  const changeHandler = (e) => {
    setCity(e.target.value);
  };

  const submitHandler = (e) => {
    if (city.trim() === "") {
      console.log("Введите город");
    }

    dispatch(setWeatherLoading);
    dispatch(loadWeatherByCity(city));
    // const { lat, lon } = location.data[0];

    // dispatch(loadWeather(lat, lon));

    setCity("");
  };

  return (
    <div className={styles.header}>
      <Row justify="space-around" gutter={[16, 16]}>
        <Col xs={24} sm={12} md={8}>
          <Form form={form} autoComplete="off">
            <Input
              value={city}
              onChange={changeHandler}
              placeholder="Enter a city..."
              autoFocus
              allowClear
            />
            <Button onClick={submitHandler} type="primary" htmlType="submit">
              Search
            </Button>
          </Form>
          {/* <MySearch
            className={styles.header__search}
            onSearch={submitHandler}
          /> */}
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
            <Calendar visible={visible} setVisible={setVisible} />
            <MySwitch
              checked="Daily"
              unChecked="Hourly"
              onChange={changeForecastOption}
            />
            <MySwitch checked="FirstAPI" unChecked="SecondAPI" />
          </Space>
        </Col>
      </Row>
    </div>
  );
};

export default Header;
