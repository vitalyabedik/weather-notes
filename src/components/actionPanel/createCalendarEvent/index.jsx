import OpenModal from "./openModal";
import CalendarEvent from "./calendarEvent";

const CreateCalendarEvent = () => (
  <OpenModal component={<CalendarEvent />} title="Calendar" />
);
export default CreateCalendarEvent;
