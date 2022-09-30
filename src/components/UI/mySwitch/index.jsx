import { Switch } from "antd";

const MySwitch = ({ checked, unChecked }) => (
  <Switch
    checkedChildren={checked}
    unCheckedChildren={unChecked}
    defaultChecked
  />
);

export default MySwitch;
