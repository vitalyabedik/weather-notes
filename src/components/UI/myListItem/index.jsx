import { useState, useRef } from "react";
import { useDispatch } from "react-redux";
import moment from "moment";

import { Form, TimePicker, Input, Tag, Typography } from "antd";
import { SaveOutlined, EditOutlined, DeleteOutlined } from "@ant-design/icons";

import styles from "./MyListItem.module.scss";

// import {setText} from '../../../redux/actions/textAction';
import { deleteNote, updateNote } from "../../../redux/actions/notesAction";

const { Text } = Typography;

const ListItem = ({ item, showItemsActions }) => {
  const [text, setText] = useState(item.text);
  const [time, setTime] = useState(item.time);
  const [isEditing, setIsEditing] = useState(false);

  const [form] = Form.useForm();

  const dispatch = useDispatch();

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
        updatedNoteText: text,
        updatedNoteTime: time,
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
          <div className={styles.listItem__input}>
            <div className={styles[`listItem__input-time`]}>
              <TimePicker
                format="HH:mm"
                defaultValue={moment(time, "HH:mm")}
                onSelect={(value) => {
                  const timeString = moment(value).format("HH:mm");
                  setTime(timeString);
                }}
                autoFocus
              />
            </div>
            <div className={styles[`listItem__input-text`]}>
              {" "}
              <Input
                compact
                value={text}
                onChange={(e) => setText(e.target.value)}
                allowClear
              />
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
