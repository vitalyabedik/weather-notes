import { useState } from "react";
import { useSelector } from "react-redux";

import { Space, Form, Input, DatePicker, TimePicker, Button } from "antd";
import { PlusCircleOutlined, ReloadOutlined } from "@ant-design/icons";

import {
  formatHourMinute,
  setCurrentTime,
  getCurrentTime,
  setFormat,
  formatCalendarDayMonthYear,
} from "../../utils/formatData/formatTimeAndDate";
import rules from "../../utils/rules";
import useActions from "../../hooks/useActions";

const NoteForm = () => {
  const [selectedDate, setSelectedDate] = useState(null);
  const [selectedTime, setSelectedTime] = useState(null);

  const text = useSelector((store) => store.app.text);
  const { setText, addNote } = useActions();

  const [form] = Form.useForm();

  const handleText = (e) => {
    setText(e.target.value);
  };

  const selectDate = (date) => {
    if (date) {
      setSelectedDate(setFormat(date, formatCalendarDayMonthYear));
    }
  };

  const submitForm = () => {
    addNote({
      id: Date.now(),
      date: selectedDate,
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
    <Form form={form} autoComplete="off" onFinish={submitForm}>
      <Form.Item
        name="text"
        label="Text"
        hasFeedback
        rules={[rules.required("Text"), rules.whitespace]}
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
        name="date-picker"
        label="Date"
        hasFeedback
        rules={[
          rules.required("Date"),
          // rules.isDateAfter(" You cannot create an event in the past"),
        ]}
      >
        <DatePicker onChange={(date) => selectDate(date)} />
      </Form.Item>
      <Form.Item
        name="time-picker"
        label="Time"
        hasFeedback
        rules={[rules.required("Time")]}
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
