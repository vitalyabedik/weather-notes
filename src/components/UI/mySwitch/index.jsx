import { Switch } from "antd";

const MySwitch = ({ checked, unChecked, onChange }) => (
  <Switch
    checkedChildren={checked}
    unCheckedChildren={unChecked}
    defaultChecked
    onChange={() => onChange()}
    style={{ width: 90 }}
  />
);
export default MySwitch;
