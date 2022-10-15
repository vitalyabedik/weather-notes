import { List } from "antd";

import { MyListItem } from "../UI";

const CurrentEvent = () => {
  const notes = [
    { text: "Start work", time: "08:00" },
    { text: "End work", time: "17:15" },
    { text: "Go to the gym", time: "17:30" },
    { text: "Go home", time: "18:30" },
    { text: "Start learning", time: "19:20" },
    { text: "Go sleep", time: "23:20" },
  ];

  return (
    <List
      dataSource={notes}
      renderItem={(item) => (
        <List.Item>
          <MyListItem item={item} showItemsActions={false} />
        </List.Item>
      )}
    />
  );
};

export default CurrentEvent;
