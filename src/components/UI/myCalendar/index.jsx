import { useSelector } from "react-redux";

import { Calendar, Badge } from "antd";

import {
  formatCalendarDayMonthYear,
  setFormat,
} from "../../../utils/formatData/formatTimeAndDate";

const MyCalendar = () => {
  const notes = useSelector((store) => store.notes);

  const dateCellRender = (value) => {
    const formatedDate = setFormat(value, formatCalendarDayMonthYear);
    const currentDayEvents = [...notes].filter(
      (event) => event.date === formatedDate
    );
    return (
      <ul className="events">
        {currentDayEvents.map((item) => (
          <li key={item.id}>
            <Badge status="processing" text={item.text} />
          </li>
        ))}
      </ul>
    );
  };

  return <Calendar dateCellRender={dateCellRender} />;
};

export default MyCalendar;
