import { useSelector } from "react-redux";

import { Row, Col, Button, Divider } from "antd";

import { MyModal } from "../UI";
import NoteForm from "./NoteForm";
import NoteList from "./NoteList";
import useActions from "../../hooks/useActions";

const Note = () => {
  const { isOpenNote } = useSelector((state) => state.app);
  const { closeNote } = useActions();

  return (
    <MyModal title="Event Form" open={isOpenNote} onCancel={closeNote}>
      <Divider plain>Note creator</Divider>
      <NoteForm />
      <Divider plain>Today notes</Divider>
      <NoteList />
      <Row align="center">
        <Col>
          {" "}
          <Button type="primary" onClick={closeNote}>
            Accept
          </Button>
        </Col>
      </Row>
    </MyModal>
  );
};

export default Note;
