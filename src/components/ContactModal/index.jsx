import Modal from "react-modal";
import { React, useContext } from "react";
import { PortContext } from "../../contexts/PortContext";
import { StyledContainerModal } from "./styles";
Modal.setAppElement("#root");

export function ContactModal() {
  const { contactModalIsOpen, handleContactModal } = useContext(PortContext);
  return (
    <StyledContainerModal>
      <div
        isOpen={contactModalIsOpen}
        onRequestClose={handleContactModal}
        className="modalContent"
      >
        <div className="headerModal">
          <h2 className="titleModal">Contato</h2>
          <button onClick={() => handleContactModal()} className="btCloseModal">
            X
          </button>
        </div>
      </div>
    </StyledContainerModal>
  );
}
