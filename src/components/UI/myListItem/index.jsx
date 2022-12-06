import moment from "moment";
import { useState } from "react";

import { TimePicker, Input, Tag, Typography } from "antd";
import { SaveOutlined, EditOutlined, DeleteOutlined } from "@ant-design/icons";

import styles from "./MyListItem.module.scss";

import useActions from "../../../hooks/useActions";
import {
  formatHourMinute,
  getCurrentTime,
} from "../../../utils/formatData/formatTimeAndDate";

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
    const timeString = getCurrentTime(value);
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
            <Tag className={!showItemsActions ? styles[`ant-tag`] : null}>
              {item.time}
            </Tag>
            <Text
              className={!showItemsActions ? styles[`ant-typography`] : null}
            >
              {item.text}
            </Text>
          </div>
        ) : (
          <div className={styles.listItem__input}>
            <div className={styles[`listItem__input-time`]}>
              <TimePicker
                format={formatHourMinute}
                defaultValue={moment(time, formatHourMinute)}
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
      <div
        className={
          !showItemsActions ? styles[`listItem__icon-visibility`] : null
        }
      >
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
