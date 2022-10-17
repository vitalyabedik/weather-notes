import { CalendarOutlined } from "@ant-design/icons";

import styles from "./Calendar.module.scss";

import { MyModal, MyCalendar } from "../UI";
import NoteModal from "../note";
// import CalendarEvent from "./calendarEvent";

const Calendar = ({ visible, setVisible }) => (
  <MyModal
    // title="Open calendar"
    type="text"
    visible={visible}
    setVisible={setVisible}
    width={1000}
    icon={<CalendarOutlined className={styles.calendar__icon} />}
  >
    <div>
      <MyCalendar visible={visible} setVisible={setVisible} />
      <NoteModal visible={visible} setVisible={setVisible} />
    </div>
  </MyModal>
);
export default Calendar;
