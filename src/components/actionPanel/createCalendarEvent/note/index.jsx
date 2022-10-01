import { useState } from "react";

import { Divider } from "antd";

import { MyModal } from "../../../UI";
import NoteForm from "./NoteForm";
import NoteList from "./NoteList";

const Note = () => {
  const [isVisible, setIsVisible] = useState(false);

  return (
    <MyModal title="Note" visible={isVisible} setVisible={setIsVisible}>
      <Divider plain>Note item</Divider>
      <NoteForm />
      <Divider plain>Notes list</Divider>
      <NoteList />
    </MyModal>
  );
};

export default Note;
