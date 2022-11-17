import { Alert } from "antd";

const MyAlert = () => (
  <Alert
    message="Error"
    description="Weather forecast error"
    type="error"
    showIcon
    closable
  />
);

export default MyAlert;
