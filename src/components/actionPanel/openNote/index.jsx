import { Modal } from "antd";
import OpenModal from "../createCalendarEvent/openModal";

const OpenNote = () => (
  <div>
    <OpenModal component={<Modal />} title="Calendar" />
  </div>
);

export default OpenNote;
