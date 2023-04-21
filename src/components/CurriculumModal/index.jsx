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
      "https://docs.google.com/document/d/1-Kn67gmx8LqyXoPdqgRsmkxUJx_ABlb6vtrXWrHTcMw/edit?usp=sharing",
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
            para um outra página, onde poderá visualizar o meu currículo.
          </p>
          <button className="btGoToCurriculum" onClick={() => goToCurriculum()}>
            Visualizar
          </button>
        </div>
      </div>
    </StyledContainerModal>
  );
}
