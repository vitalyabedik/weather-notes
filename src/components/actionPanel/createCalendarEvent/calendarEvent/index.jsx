import { MyCalendar } from "../../../UI";
import NoteModal from "../note";

const CalendarEvent = ({ visible, setVisible }) => (
  <div>
    <MyCalendar visible={visible} setVisible={setVisible} />
    <NoteModal visible={visible} setVisible={setVisible} />
  </div>
);

export default CalendarEvent;
