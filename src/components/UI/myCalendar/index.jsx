import { useState } from "react";

import { Calendar } from "antd";

import {
  formatCalendarYearMonthDay,
  setCalendarDate,
  setCurrentTime,
  weekDaysNumberFormat,
  weekDaysNameFormat,
} from "../../../utils/formatData/formatTimeAndDate";

const MyCalendar = () => {
  const calendarDate = setCalendarDate();
  const currentCalendarDate = setCurrentTime(calendarDate);

  const [value, setValue] = useState(currentCalendarDate);

  const [selectedValue, setSelectedValue] = useState(currentCalendarDate);

  const onSelect = (newValue) => {
    setValue(newValue);
    setSelectedValue(newValue);
    console.log(selectedValue.format(formatCalendarYearMonthDay));
  };

  const onPanelChange = (newValue) => {
    setValue(newValue.i);
  };

  return (
    <Calendar
      value={value}
      onSelect={onSelect}
      onPanelChange={onPanelChange}
      footer={null}
    />
  );
};

export default MyCalendar;
