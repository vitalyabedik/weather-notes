import { useDispatch } from "react-redux";

import { Tag, Typography } from "antd";
import { EditOutlined, DeleteOutlined } from "@ant-design/icons";

import styles from "./MyListItem.module.scss";

import { removeNote } from "../../../redux/actions/notesAction";

const { Text } = Typography;

const ListItem = ({ item, showItemsActions }) => {
  const dispatch = useDispatch();

  return (
    <>
      <div className={styles.listItem}>
        <Tag className={!showItemsActions && styles[`ant-tag`]}>
          {item.time}
        </Tag>
        <Text className={!showItemsActions && styles[`ant-typography`]}>
          {item.text}
        </Text>
      </div>
      <div className={!showItemsActions && styles[`listItem__icon-visibility`]}>
        <EditOutlined />
        <DeleteOutlined
          onClick={() => dispatch(removeNote(item.id))}
          className={styles[`listItem__icon-delete`]}
        />
      </div>
    </>
  );
};
export default ListItem;
