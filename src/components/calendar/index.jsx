import { useSelector } from "react-redux";
import { CalendarOutlined, FileDoneOutlined } from "@ant-design/icons";

import { Row, Col, Button } from "antd";
import styles from "./Calendar.module.scss";

import { MyModal, MyCalendar } from "../UI";
import Note from "../note";
import useActions from "../../hooks/useActions";

const Calendar = () => {
  const { isOpenCalendar } = useSelector((state) => state.app);
  const { openCalendar, closeCalendar, openNote } = useActions();

  return (
    <>
      <Button
        type="link"
        onClick={() => openCalendar()}
        icon={<CalendarOutlined className={styles.calendar__icon} />}
      />
      <MyModal
        title="Calendar"
        open={isOpenCalendar}
        onCancel={closeCalendar}
        width={1000}
      >
        <div>
          <MyCalendar />
          <Note />
          <Row align="center">
            <Col>
              {" "}
              <Button
                type="primary"
                onClick={() => openNote()}
                icon={<FileDoneOutlined />}
              >
                Create Event
              </Button>
            </Col>
          </Row>
        </div>
      </MyModal>
    </>
  );
};
export default Calendar;
