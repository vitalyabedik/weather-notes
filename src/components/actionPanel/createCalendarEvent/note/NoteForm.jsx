import { Space, Form, Input, TimePicker, Button } from "antd";

import { PlusCircleOutlined, ReloadOutlined } from "@ant-design/icons";

// import { MyDatePicker, MyTimePicker } from "../../../UI";

const NoteForm = () => {
  const [form] = Form.useForm();

  const onReset = () => {
    form.resetFields();
  };

  return (
    <Form form={form} autoComplete="off">
      <Form.Item name="note" label="Text">
        <Input placeholder="Enter new note" allowClear />
      </Form.Item>

      {/* <Form.Item name="date-picker" label="Date" hasFeedback>
        <DatePicker picker="date" placeholder="Select date" />
      </Form.Item> */}

      <Form.Item name="time-picker" label="Time" hasFeedback>
        <TimePicker />
      </Form.Item>

      <Form.Item>
        <Space size={8}>
          <Button
            type="primary"
            htmlType="submit"
            icon={<PlusCircleOutlined />}
          >
            Add note
          </Button>
          <Button htmlType="button" onClick={onReset} icon={<ReloadOutlined />}>
            Reset
          </Button>
        </Space>
      </Form.Item>
    </Form>
  );
};

export default NoteForm;
