import Modal from "react-modal";
import { React, useContext } from "react";
import { PortContext } from "../../contexts/PortContext";
import { StyledContainerModal } from "./styles";
Modal.setAppElement("#root");

export function AboutMeModal() {
  const { aboutMeModalIsOpen, handleAboutMeModal } = useContext(PortContext);
  return (
    <StyledContainerModal>
      <div
        isOpen={aboutMeModalIsOpen}
        onRequestClose={handleAboutMeModal}
        className="modalContent"
      >
        <div className="headerModal">
          <h2 className="titleModal">Sobre mim</h2>
          <button onClick={() => handleAboutMeModal()} className="btCloseModal">
            X
          </button>
        </div>
      </div>
    </StyledContainerModal>
  );
}
