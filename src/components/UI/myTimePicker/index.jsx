import { TimePicker } from "antd";
import moment from "moment";

const format = "HH:mm";

const MyTimePicker = () => (
  <div>
    <TimePicker defaultValue={moment("12:08", format)} format={format} />
  </div>
);

export default MyTimePicker;
