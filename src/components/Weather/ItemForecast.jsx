import { Row, Col, Typography, Card, Tag, Image } from "antd";

import styles from "./ItemForecast.module.scss";

const { Text } = Typography;

const ItemForecast = ({ info, icon, temperature }) => (
  <div className={styles.itemForecast}>
    <Card bordered={false}>
      <Row justify="center">
        <Col>
          {" "}
          <Tag className={styles[`ant-tag`]}>{info}</Tag>
        </Col>
      </Row>
      <Row justify="center">
        <Col>
          {" "}
          <Image
            className={styles.itemForecast__image}
            src={icon}
            width={45}
            alt="weather"
            preview={false}
          />
        </Col>
      </Row>
      <Row justify="center">
        {" "}
        <Col>
          {" "}
          <Text className={styles[`ant-typography`]} strong>
            {temperature}&deg;
          </Text>
        </Col>
      </Row>
    </Card>
  </div>
);

export default ItemForecast;
