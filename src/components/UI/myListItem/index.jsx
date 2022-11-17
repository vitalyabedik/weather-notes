import moment from "moment";
import { useState } from "react";

import { TimePicker, Input, Tag, Typography } from "antd";
import { SaveOutlined, EditOutlined, DeleteOutlined } from "@ant-design/icons";

import styles from "./MyListItem.module.scss";

import useActions from "../../../hooks/useActions";

const { Text } = Typography;

const ListItem = ({ item, showItemsActions }) => {
  const [text, setText] = useState(item.text);
  const [time, setTime] = useState(item.time);
  const [isEditing, setIsEditing] = useState(false);

  const { deleteNote, updateNote } = useActions();

  const handleText = (e) => {
    setText(e.target.value);
  };

  const handleTime = (value) => {
    const timeString = moment(value).format("HH:mm");
    setTime(timeString);
  };

  const handleEditNote = () => {
    if (isEditing) {
      const newNote = text;
      updateNote(newNote);
    }
    setIsEditing(!isEditing);
  };

  const handleDeleteNote = () => {
    deleteNote(item.id);
  };

  const handleUpdateNote = () => {
    updateNote({
      id: item.id,
      updatedNoteText: text,
      updatedNoteTime: time,
    });
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
          <div className={styles.listItem__input}>
            <div className={styles[`listItem__input-time`]}>
              <TimePicker
                format="HH:mm"
                defaultValue={moment(time, "HH:mm")}
                onSelect={handleTime}
                autoFocus
              />
            </div>
            <div className={styles[`listItem__input-text`]}>
              {" "}
              <Input compact value={text} onChange={handleText} allowClear />
            </div>
          </div>
        )}
      </div>
      <div className={!showItemsActions && styles[`listItem__icon-visibility`]}>
        <div>
          {!isEditing ? (
            <div>
              <EditOutlined onClick={handleEditNote} />
              <DeleteOutlined
                onClick={handleDeleteNote}
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
