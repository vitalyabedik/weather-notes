import { useState, useRef } from "react";
import { useDispatch } from "react-redux";

import { Input, Tag, Typography } from "antd";
import { EditOutlined, DeleteOutlined } from "@ant-design/icons";

import styles from "./MyListItem.module.scss";

import { deleteNote, updateNote } from "../../../redux/actions/notesAction";

const { Text } = Typography;

const ListItem = ({ item, showItemsActions }) => {
  const inputRef = useRef(null);
  const [text, setText] = useState(item.text);
  const [edit, setEdit] = useState(false);

  const dispatch = useDispatch();

  const valid = () => {
    inputRef.current.focus({
      preventScroll: true,
    });
  };

  return (
    <>
      <div className={styles.listItem}>
        {!edit ? (
          <div>
            <Tag className={!showItemsActions && styles[`ant-tag`]}>
              {item.time}
            </Tag>

            <Text className={!showItemsActions && styles[`ant-typography`]}>
              {item.text}
            </Text>
          </div>
        ) : (
          <Input
            ref={inputRef}
            addonBefore={item.time}
            value={text}
            onChange={(e) => setText(e.target.value)}
            // onPressEnter{(e) => console.log(e.target.value)}
            allowClear
            style={{ display: "flex" }}
          />
        )}
      </div>
      <div className={!showItemsActions && styles[`listItem__icon-visibility`]}>
        <EditOutlined
          onClick={() => {
            if (edit) {
              setText(text);
            }
            setEdit(!edit);
            valid();
          }}
        />
        <DeleteOutlined
          onClick={() => dispatch(deleteNote(item.id))}
          className={styles[`listItem__icon-delete`]}
        />
      </div>
    </>
  );
};
export default ListItem;
