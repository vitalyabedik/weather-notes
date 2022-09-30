import { MyModal } from "../../UI";
import CalendarEvent from "./calendarEvent";

const CreateCalendarEvent = ({ visible, setVisible }) => (
  <MyModal title="Calendar" visible={visible} setVisible={setVisible}>
    <CalendarEvent />{" "}
  </MyModal>
);
export default CreateCalendarEvent;
