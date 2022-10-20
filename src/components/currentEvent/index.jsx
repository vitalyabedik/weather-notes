import { useSelector } from "react-redux";

import { List } from "antd";

import { MyListItem } from "../UI";

const CurrentEvent = () => {
  const notes = useSelector((store) => store.notes);

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
