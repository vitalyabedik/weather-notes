import { Button, Modal } from "antd";

const MyModal = ({ children, title, visible, setVisible }) => {
  const showModal = () => {
    setVisible(true);
  };

  const handleOk = () => {
    setVisible(false);
  };

  const handleCancel = () => {
    setVisible(false);
  };

  return (
    <>
      <Button type="primary" onClick={() => showModal()}>
        Open {title}
      </Button>
      <Modal
        title={title}
        open={visible}
        onOk={handleOk}
        onCancel={handleCancel}
        width={1000}
      >
        {children}
      </Modal>
    </>
  );
};

export default MyModal;
