import { Switch } from "antd";

const MySwitch = ({ checked, unChecked }) => (
  <Switch
    checkedChildren={checked}
    unCheckedChildren={unChecked}
    defaultChecked
    style={{ width: 90 }}
  />
);

export default MySwitch;
