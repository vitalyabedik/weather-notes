import { useState, useEffect, useRef } from "react";
import { useDispatch, useSelector } from "react-redux";
import moment from "moment";

import { Space, Form, Input, TimePicker, Button } from "antd";
import { PlusCircleOutlined, ReloadOutlined } from "@ant-design/icons";

import setText from "../../redux/actions/textAction";
import { addNote } from "../../redux/actions/notesAction";

const NoteForm = () => {
  const [selectedTime, setSelectedTime] = useState(null);
  const textInput = useRef(null);

  const dispatch = useDispatch();
  const text = useSelector((store) => store.text);

  const [form] = Form.useForm();

  useEffect(() => {
    textInput.current.focus();
  });

  const handleAddNote = (event) => {
    event.preventDefault();
    dispatch(
      addNote({
        id: Date.now(),
        time: selectedTime,
        text,
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
          ref={textInput}
          value={text}
          onChange={(e) => dispatch(setText(e.target.value))}
          placeholder="Enter new note"
          allowClear
        />
      </Form.Item>
      <Form.Item name="time-picker" label="Time" hasFeedback>
        <TimePicker
          format="HH:mm"
          value={moment(selectedTime)}
          onSelect={(value) => {
            const timeString = moment(value).format("HH:mm");
            setSelectedTime(timeString);
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