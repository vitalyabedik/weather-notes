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
import { addNote } from "../../redux/actions/notesAction";

const NoteForm = () => {
  const [selectedTime, setSelectedTime] = useState(null);

  const dispatch = useDispatch();
  const text = useSelector((store) => store.text);

  const [form] = Form.useForm();

  const handleAddNote = (event) => {
    event.preventDefault();
    dispatch(
      addNote({
        id: Date.now(),
        time: selectedTime,
        text,
        editing: false,
      })
    );
    form.resetFields();
  };

  const onReset = () => {
    form.resetFields();
  };

  return (
    <Form form={form} autoComplete="off">
      <Form.Item name="note" label="Text">
        <Input
          value={text}
          onChange={(e) => dispatch(setText(e.target.value))}
          placeholder="Enter new note"
          autoFocus
          allowClear
        />
      </Form.Item>
      <Form.Item name="time-picker" label="Time" hasFeedback>
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
