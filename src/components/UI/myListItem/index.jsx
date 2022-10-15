import { Tag, Typography } from "antd";
import { EditOutlined, DeleteOutlined } from "@ant-design/icons";

import styles from "./MyListItem.module.scss";

const { Text } = Typography;

const ListItem = ({ item, showItemsActions }) => (
  <>
    <div>
      <Tag className={showItemsActions ? null : styles[`ant-tag`]}>
        {item.time}
      </Tag>
      <Text style={{ fontSize: 20 }}>{item.text}</Text>
    </div>
    {showItemsActions && (
      <div>
        <EditOutlined />
        <DeleteOutlined style={{ color: "red", marginLeft: 12 }} />
      </div>
    )}
  </>
);

export default ListItem;
