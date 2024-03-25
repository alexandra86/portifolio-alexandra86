import Modal from "react-modal";
import { React, useContext } from "react";
import { PortContext } from "../../contexts/PortContext";
import { StyledContainerModal } from "./styles";
import { Link } from "react-router-dom";
import linkedinLogo from "../../img/linkedin.svg";
import gitHubLogo from "../../img/github.png";
import whatsAppLogo from "../../img/whatsapp.svg";
import { isMobile } from "react-device-detect";
Modal.setAppElement("#root");

export function ContactModal() {
  const { contactModalIsOpen, HandleContactModal } = useContext(PortContext);

  const openWhatsApp = () => {
    if (isMobile) {
      window.location.href = "whatsapp://send?phone=+5521989964940";
    } else {
      window.open("https://web.whatsapp.com/send?phone=+5521989964940");
    }
  };

  return (
    <StyledContainerModal>
      <div
        isOpen={contactModalIsOpen}
        onRequestClose={HandleContactModal}
        className="modalContent"
      >
        <div className="headerModal">
          <button onClick={() => HandleContactModal()} className="btCloseModal">
            X
          </button>
        </div>
        <h2 className="titleModal">Contatos:</h2>
        <div className="divContact">
          <Link
            target="_blank"
            to="https://www.linkedin.com/in/alexandra-miranda86/"
            className="linkedin"
          >
            <img
              src={linkedinLogo}
              alt="Logo do linkedin"
              className="linkedinImage"
            />
          </Link>

          <Link
            target="_blank"
            to="https://github.com/alexandra86"
            className="gitHub"
          >
            <img
              src={gitHubLogo}
              alt="Logo do github"
              className="gitHubImage"
            />
          </Link>

          <Link onClick={openWhatsApp} className="whatsApp">
            <img
              src={whatsAppLogo}
              alt="Logo do whatsapp"
              className="whatsAppImage"
            />
          </Link>
        </div>
      </div>
    </StyledContainerModal>
  );
}
