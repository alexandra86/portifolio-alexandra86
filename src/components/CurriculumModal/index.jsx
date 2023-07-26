import Modal from "react-modal";
import { React, useContext } from "react";
import { PortContext } from "../../contexts/PortContext";
import { StyledContainerModal } from "./styles";
Modal.setAppElement("#root");

export function CurriculuModal() {
  const { curriculuModalIsOpen, HandleCurriculuModal } =
    useContext(PortContext);

  function goToCurriculum() {
    window.open(
      "https://docs.google.com/document/d/1gCeluaDCyCZaqusU38kmFM2AfzZ6LsJPP09_hVSIJ9o/edit#heading=h.srdd0eutwlge",
      "_blank"
    );
  }
  return (
    <StyledContainerModal>
      <div
        isOpen={curriculuModalIsOpen}
        onRequestClose={HandleCurriculuModal}
        className="modalContent"
      >
        <div className="headerModal">
          <button
            onClick={() => HandleCurriculuModal()}
            className="btCloseModal"
          >
            X
          </button>
        </div>
        <h2 className="titleMessage">Prezado&#40;a&#41;,</h2>
        <div className="divCurriculumMessage">
          <p className="curriculumMessage">
            Para verificar minhas demais informações acadêmicas e profissionais,
            por favor clicar no botão abaixo. Com isso, você será redirecionado
            para uma outra página, onde poderá visualizar o meu currículo.
          </p>
          <button className="btGoToCurriculum" onClick={() => goToCurriculum()}>
            Visualizar
          </button>
        </div>
      </div>
    </StyledContainerModal>
  );
}
