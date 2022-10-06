import { Switch } from "antd";

const MySwitch = ({ checked, unChecked, onChange }) => (
  <Switch
    checkedChildren={checked}
    unCheckedChildren={unChecked}
    defaultChecked
    onChange={(value) => onChange(value)}
    style={{ width: 90 }}
  />
);
export default MySwitch;
