import { List } from "antd";

import { MyListItem } from "../../../UI";

const NoteList = () => {
  const notes = [
    { text: "Start work", time: "08:00" },
    { text: "End work", time: "17:15" },
    { text: "Go to the gym", time: "17:30" },
    { text: "Go home", time: "18:30" },
    { text: "Start learning", time: "19:20" },
    { text: "Go sleep", time: "23:20" },
  ];

  return (
    <div>
      <List
        dataSource={notes}
        renderItem={(item) => (
          <List.Item style={{ borderBottom: "none" }}>
            <MyListItem item={item} showItemsActions />
          </List.Item>
        )}
      />
    </div>
  );
};

export default NoteList;
