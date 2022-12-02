import { useSelector } from "react-redux";

import { List } from "antd";

import { MyListItem } from "../UI";
import {
  formatCalendarDayMonthYear,
  nowDay,
  setFormat,
} from "../../utils/formatData/formatTimeAndDate";

const CurrentEvent = () => {
  const notes = useSelector((store) => store.notes);

  const formatedDate = setFormat(nowDay, formatCalendarDayMonthYear);
  const currentDayEvents = [...notes].filter(
    (event) => event.date === formatedDate
  );

  return (
    <List
      dataSource={currentDayEvents}
      renderItem={(item) => (
        <List.Item>
          <MyListItem item={item} showItemsActions={false} />
        </List.Item>
      )}
    />
  );
};

export default CurrentEvent;
