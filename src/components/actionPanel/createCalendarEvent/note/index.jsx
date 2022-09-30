import { useState } from "react";

import { MyModal } from "../../../UI";
import NoteItemsModal from "./noteItemsModal";

const NoteModal = () => {
  const [isVisible, setIsVisible] = useState(false);

  return (
    <MyModal title="Note" visible={isVisible} setVisible={setIsVisible}>
      <NoteItemsModal />
    </MyModal>
  );
};

export default NoteModal;
