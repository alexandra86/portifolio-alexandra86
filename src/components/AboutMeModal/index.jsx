import Modal from "react-modal";
import { React, useContext } from "react";
import { PortContext } from "../../contexts/PortContext";
import { StyledContainerModal } from "./styles";
import htmlIcon from "../../img/html.png";
import cssIcon from "../../img/css.png";
import javaScriptIcon from "../../img/javascript.png";
import typeScriptIcon from "../../img/typescript.png";
import reactIcon from "../../img/react.png";
import nodeJsIcon from "../../img/node-js.png";
import pythonIcon from "../../img/python.png";

Modal.setAppElement("#root");

export function AboutMeModal() {
  const { aboutMeModalIsOpen, HandleAboutMeModal } = useContext(PortContext);

  return (
    <StyledContainerModal>
      <div
        isOpen={aboutMeModalIsOpen}
        onRequestClose={HandleAboutMeModal}
        className="modalContent"
      >
        <div className="headerModal">
          <button onClick={() => HandleAboutMeModal()} className="btCloseModal">
            X
          </button>
        </div>
        <h2 className="titleAboutMeModal">Sobre mim</h2>
        <div className="divAboutMeALittle">
          <p className="aboutMeALittle">
            Sou formada em Desenvolvimento Web Full Stack, pela Kenzie Academy
            Brasil. Também faço curso superior em Análise e Desenvolvimento de
            Sistemas &#40;EAD&#41;, na Gran Faculdade, com previsão de formatura
            para 2025.
          </p>
          <h3 className="titleHardSkills">Hard Skills:</h3>
          <div className="techs">
            <img src={htmlIcon} alt="Ícone de HTML5" className="techIcon" />

            <img src={cssIcon} alt="Ícone de CSS" className="techIcon" />
            <img
              src={javaScriptIcon}
              alt="Ícone de Javascript"
              className="techIcon"
            />
            <img
              src={typeScriptIcon}
              alt="Ícone de Typescript"
              className="techIcon"
            />
            <img src={reactIcon} alt="Ícone de React" className="techIcon" />
            <img src={nodeJsIcon} alt="Ícone de Node.js" className="techIcon" />

            <img src={pythonIcon} alt="Ícone de Python" className="techIcon" />
          </div>
          <h3 className="titleSoftSkills">Soft Skills:</h3>
          <p className="mySoftSkill">
            Trabalho em equipe, comunicação, foco e empatia
          </p>
        </div>
      </div>
    </StyledContainerModal>
  );
}
