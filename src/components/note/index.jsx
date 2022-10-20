import { useState } from "react";
import { useSelector } from "react-redux";

import { Divider } from "antd";
import { FileDoneOutlined } from "@ant-design/icons";

import { MyModal } from "../UI";
import NoteForm from "./NoteForm";
import NoteList from "./NoteList";

const Note = () => {
  const notes = useSelector((store) => store.notes);

  const [isVisible, setIsVisible] = useState(false);

  return (
    <MyModal
      title="Note"
      visible={isVisible}
      setVisible={setIsVisible}
      icon={<FileDoneOutlined />}
    >
      <Divider plain>Note item</Divider>
      <NoteForm />
      <Divider plain>Notes list</Divider>
      <NoteList notes={notes} />
    </MyModal>
  );
};

export default Note;
