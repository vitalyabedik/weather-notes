import { DatePicker } from "antd";

// const { RangePicker } = DatePicker;

const onChange = (value, dateString) => {
  console.log("Selected Time: ", value);
  console.log("Formatted Selected Time: ", dateString);
};

const onOk = (value) => {
  console.log("onOk: ", value);
};

const SelectorDate = () => (
  <div>
    <DatePicker showTime onChange={onChange} onOk={onOk} />
  </div>
);

export default SelectorDate;
