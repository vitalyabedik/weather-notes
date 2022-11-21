import { Spin } from "antd";
import { LoadingOutlined } from "@ant-design/icons";

import styles from "./MyLoader.module.scss";

const MyLoader = () => (
  <Spin
    className={styles.loader}
    indicator={<LoadingOutlined />}
    size="large"
    tip="Loading..."
  />
);

export default MyLoader;
