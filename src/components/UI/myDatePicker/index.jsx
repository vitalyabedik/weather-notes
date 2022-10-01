import { DatePicker, Space } from "antd";

const MyDatePicker = () => {
  const onChange = (date, dateString) => {
    console.log(date, dateString);
  };

  return (
    <Space direction="vertical">
      <DatePicker onChange={onChange} />
    </Space>
  );
};

export default MyDatePicker;
