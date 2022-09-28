import { useState } from "react";

import { Calendar } from "antd";
import moment from "moment";

const CalendarEvent = () => {
  const [value, setValue] = useState(moment("2022-09-28"));
  const [selectedValue, setSelectedValue] = useState(moment("2022-09-28"));

  const onSelect = (newValue) => {
    setValue(newValue);
    setSelectedValue(newValue);
    console.log(selectedValue.format("YYYY-MM-DD"));
  };

  const onPanelChange = (newValue) => {
    setValue(newValue.i);
  };

  return (
    <div>
      <Calendar
        value={value}
        onSelect={onSelect}
        onPanelChange={onPanelChange}
      />
    </div>
  );
};

export default CalendarEvent;
