import { useState } from "react";

import { Calendar } from "antd";
import moment from "moment";

moment.updateLocale("en", {
  week: {
    dow: 1,
    doy: 7,
  },
});

moment.updateLocale("en", {
  weekdaysMin: ["Sun", "Mon", "Tue", "Wed", "Thu", "Fri", "Sat"],
});

const MyCalendar = () => {
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

  // const clickOnButton = (e) => {
  //   e.stopPropagation();
  //   alert("Clicked on button!");
  // };

  return (
    <div>
      <Calendar
        value={value}
        onSelect={onSelect}
        onPanelChange={onPanelChange}
      />

      {/* <Button onClick={clickOnButton}>Click Me</Button>; */}
    </div>
  );
};

export default MyCalendar;
