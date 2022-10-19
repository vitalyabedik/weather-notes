import { List } from "antd";

import { MyListItem } from "../UI";

const NoteList = ({ notes }) => (
  <List
    dataSource={notes}
    renderItem={(item) => (
      <List.Item>
        <MyListItem item={item} showItemsActions />
      </List.Item>
    )}
  />
);

export default NoteList;
