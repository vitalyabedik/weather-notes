import { Alert } from "antd";

const MyAlert = ({ description }) => (
  <Alert
    message="Error"
    description={description}
    type="error"
    showIcon
    closable
  />
);

export default MyAlert;
