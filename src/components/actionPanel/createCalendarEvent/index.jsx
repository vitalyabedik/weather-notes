import { useState } from "react";

import { Button, Modal } from "antd";

import CalendarEvent from "./calendarEvent";

const CreateCalendarEvent = () => {
  const [isModalOpen, setIsModalOpen] = useState(false);

  const showModal = () => {
    setIsModalOpen(true);
  };

  const handleOk = () => {
    setIsModalOpen(false);
  };

  const handleCancel = () => {
    setIsModalOpen(false);
  };

  return (
    <>
      <Button type="primary" onClick={showModal}>
        Open Calendar
      </Button>
      <Modal
        title="Calendar"
        open={isModalOpen}
        onOk={handleOk}
        onCancel={handleCancel}
        width={1000}
      >
        <CalendarEvent />
      </Modal>
    </>
  );
};

export default CreateCalendarEvent;
