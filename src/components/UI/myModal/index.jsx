import { Button, Modal } from "antd";

const MyModal = ({
  children,
  title,
  visible,
  setVisible,
  width,
  type,
  icon,
  ghost,
}) => {
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
      <Button ghost={ghost} type={type} icon={icon} onClick={() => showModal()}>
        {title}
      </Button>
      <Modal
        type={type}
        title={title}
        open={visible}
        onOk={handleOk}
        onCancel={handleCancel}
        width={width}
      >
        {children}
      </Modal>
    </>
  );
};

export default MyModal;
