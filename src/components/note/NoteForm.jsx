import { useState } from "react";
import { useDispatch, useSelector } from "react-redux";

import { Space, Form, Input, TimePicker, Button } from "antd";
import { PlusCircleOutlined, ReloadOutlined } from "@ant-design/icons";

import {
  formatHourMinute,
  setCurrentTime,
  getCurrentTime,
} from "../../utils/formatData/formatTimeAndDate";
import setText from "../../redux/actions/textAction";
import useActions from "../../hooks/useActions";

const NoteForm = () => {
  const [selectedTime, setSelectedTime] = useState(null);

  const text = useSelector((store) => store.text);

  //! why useAction not working for setText !!!
  const dispatch = useDispatch();
  const { addNote } = useActions();

  const [form] = Form.useForm();

  const handleText = (e) => {
    dispatch(setText(e.target.value));
  };

  const handleAddNote = (event) => {
    event.preventDefault();

    addNote({
      id: Date.now(),
      time: selectedTime,
      text,
      editing: false,
    });
    form.resetFields();
  };

  const onReset = () => {
    form.resetFields();
  };

  return (
    <Form
      form={form}
      autoComplete="off"
      // onFinish={(values) => {
      //   console.log({ values });
      // }}
      // onFinishFailed={(error) => {
      //   console.log({ error });
      // }}
    >
      <Form.Item
        name="text"
        label="Text"
        hasFeedback
        // rules={[
        //   {
        //     required: true,
        //     message: "Please enter your note!",
        //   },
        //   { whitespace: true },
        // ]}
      >
        <Input
          value={text}
          onChange={handleText}
          placeholder="Enter new note"
          autoFocus
          allowClear
        />
      </Form.Item>
      <Form.Item
        name="time-picker"
        label="Time"
        hasFeedback
        // rules={[
        //   {
        //     required: true,
        //     message: "Please select your country!",
        //   },
        // ]}
      >
        <TimePicker
          format={formatHourMinute}
          value={setCurrentTime(selectedTime)}
          onSelect={(value) => {
            const currentTime = getCurrentTime(value);
            setSelectedTime(currentTime);
          }}
        />
      </Form.Item>
      <Form.Item>
        <Space size={8}>
          <Button
            onClick={handleAddNote}
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
