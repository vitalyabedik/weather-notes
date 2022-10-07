import { CalendarOutlined } from "@ant-design/icons";
import { MyModal } from "../../UI";
import CalendarEvent from "./calendarEvent";

const CreateCalendarEvent = ({ visible, setVisible }) => (
  <MyModal
    // title="Open calendar"
    type="text"
    visible={visible}
    setVisible={setVisible}
    width={1000}
    icon={<CalendarOutlined style={{ color: "white" }} />}
  >
    <CalendarEvent />{" "}
  </MyModal>
);
export default CreateCalendarEvent;
