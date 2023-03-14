import React, { useContext } from "react";
import { Link } from "react-router-dom";
import { AboutMeModal } from "../../components/AboutMeModal";
import { ContactModal } from "../../components/ContactModal";
import { PortContext } from "../../contexts/PortContext";

export function HomePage() {
  const {
    aboutMeModalIsOpen,
    contactModalIsOpen,
    handleAboutMeModal,
    handleContactModal,
  } = useContext(PortContext);
  return (
    <>
      <div>
        <header>
          <div>
            <Link to="/">Home</Link>
            <Link
              component="button"
              onClick={() => {
                handleAboutMeModal();
              }}
            >
              Sobre mim
            </Link>
            <Link to="/curriculum">Currículo</Link>
            <Link to="/projects">Projetos</Link>
            <Link
              component="button"
              onClick={() => {
                handleContactModal();
              }}
            >
              Contato
            </Link>
          </div>
        </header>
      </div>
      {aboutMeModalIsOpen && <AboutMeModal />}
      {contactModalIsOpen && <ContactModal />}
    </>
  );
}
