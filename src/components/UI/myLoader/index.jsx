import { Spin } from "antd";

import styles from "./MyLoader.module.scss";

const MyLoader = () => (
  <Spin className={styles.loader} tip="Loading..." size="large" />
);

export default MyLoader;
