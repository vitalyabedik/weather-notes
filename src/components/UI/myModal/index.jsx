import { Modal } from "antd";

const MyModal = ({ children, title, open, onCancel, width }) => {
  const handleCancel = () => {
    onCancel();
  };

  return (
    <Modal
      title={title}
      open={open}
      onCancel={handleCancel}
      width={width}
      footer={null}
    >
      {children}
    </Modal>
  );
};
export default MyModal;
