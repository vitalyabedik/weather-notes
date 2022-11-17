import { useState } from "react";

import { Grid, Space, Col, Row, Form, Input, Button } from "antd";
import { SearchOutlined } from "@ant-design/icons";

import styles from "./Header.module.scss";

import { MySearch, MySwitch } from "../UI";
import Calendar from "../calendar";
import useActions from "../../hooks/useActions";

const { useBreakpoint } = Grid;

const Header = ({ changeForecastOption }) => {
  const screens = useBreakpoint();
  const isMobile = screens.xs;

  const [form] = Form.useForm();

  const [visible, setVisible] = useState(false);
  const [city, setCity] = useState("");

  const { getWeatherForecastByCityName } = useActions();

  const changeHandler = (e) => {
    setCity(e.target.value);
  };

  const submitHandler = (e) => {
    if (city.trim() === "") {
      console.log("Введите город");
    }

    getWeatherForecastByCityName(city);
    setCity("");
  };

  return (
    <div className={styles.header}>
      <Row justify="space-around" gutter={[16, 16]}>
        <Col xs={24} sm={12} md={8}>
          <Form className={styles.header__form} form={form} autoComplete="off">
            <Input
              value={city}
              onChange={changeHandler}
              placeholder="Enter a city..."
              autoFocus
              allowClear
            />
            <Button
              onClick={submitHandler}
              htmlType="submit"
              icon={<SearchOutlined />}
            />
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
