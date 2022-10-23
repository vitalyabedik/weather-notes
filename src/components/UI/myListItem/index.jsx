import { useState, useRef } from "react";
import { useDispatch } from "react-redux";

import { Input, Tag, Typography } from "antd";
import { SaveOutlined, EditOutlined, DeleteOutlined } from "@ant-design/icons";

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
          <div className={styles[`listItem__input-update`]}>
            {" "}
            <Input
              compact
              ref={inputRef}
              addonBefore={item.time}
              value={text}
              onChange={(e) => setText(e.target.value)}
              // onPressEnter{(e) => console.log(e.target.value)}
              allowClear
            />
          </div>
        )}
      </div>
      <div className={!showItemsActions && styles[`listItem__icon-visibility`]}>
        <div>
          {!edit ? (
            <div>
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
          ) : (
            <SaveOutlined
              onClick={() => {
                setEdit(!edit);
              }}
            />
          )}
        </div>
      </div>
    </>
  );
};
export default ListItem;
