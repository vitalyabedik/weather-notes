import { useState } from "react";
import { useSelector } from "react-redux";

import { Divider } from "antd";

import { FileDoneOutlined } from "@ant-design/icons";
import { MyModal } from "../UI";
import NoteForm from "./NoteForm";
import NoteList from "./NoteList";

const Note = () => {
  const notes = useSelector((store) => store.notes);
  // const notes = [
  //   { text: "Start work", time: "08:00" },
  //   { text: "End work", time: "17:15" },
  //   { text: "Go to the gym", time: "17:30" },
  //   { text: "Go home", time: "18:30" },
  //   { text: "Start learning", time: "19:20" },
  //   { text: "Go sleep", time: "23:20" },
  // ];

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
