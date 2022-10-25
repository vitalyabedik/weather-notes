import { useState, useRef } from "react";
import { useDispatch } from "react-redux";

import { Input, Tag, Typography } from "antd";
import { SaveOutlined, EditOutlined, DeleteOutlined } from "@ant-design/icons";

import styles from "./MyListItem.module.scss";

import { deleteNote, updateNote } from "../../../redux/actions/notesAction";

const { Text } = Typography;

const ListItem = ({ item, showItemsActions }) => {
  const [text, setText] = useState(item.text);
  const [isEditing, setIsEditing] = useState(false);
  const inputRef = useRef(null);

  const dispatch = useDispatch();

  const valid = () => {
    inputRef.current.focus();
  };

  const handleEditNote = () => {
    if (isEditing) {
      const newNote = text;
      dispatch(updateNote(newNote));
    }
    setIsEditing(!isEditing);
  };

  const handleUpdateNote = () => {
    dispatch(
      updateNote({
        id: item.id,
        updatedNote: text,
      })
    );
    setIsEditing(!isEditing);
  };

  return (
    <>
      <div className={styles.listItem}>
        {!isEditing ? (
          <div>
            <Tag className={!showItemsActions && styles[`ant-tag`]}>
              {item.time}
            </Tag>
            <Text className={!showItemsActions && styles[`ant-typography`]}>
              {item.text}
            </Text>
          </div>
        ) : (
          <div className={styles[`listItem__input-update`]}>
            {" "}
            <Input
              compact
              ref={inputRef}
              addonBefore={item.time}
              value={text}
              onChange={(e) => setText(e.target.value)}
              allowClear
            />
          </div>
        )}
      </div>
      <div className={!showItemsActions && styles[`listItem__icon-visibility`]}>
        <div>
          {!isEditing ? (
            <div>
              <EditOutlined onClick={handleEditNote} />
              <DeleteOutlined
                onClick={() => dispatch(deleteNote(item.id))}
                className={styles[`listItem__icon-delete`]}
              />
            </div>
          ) : (
            <SaveOutlined onClick={handleUpdateNote} />
          )}
        </div>
      </div>
    </>
  );
};
export default ListItem;
