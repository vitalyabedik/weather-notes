import { Switch } from "antd";

import styles from "./MySwitch.module.scss";

const MySwitch = ({ checked, unChecked, onChange }) => (
  <Switch
    className={styles.mySwitch}
    checkedChildren={checked}
    unCheckedChildren={unChecked}
    defaultChecked
    onChange={onChange}
  />
);
export default MySwitch;
