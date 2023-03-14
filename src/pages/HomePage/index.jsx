import React, { useContext } from "react";
import { Link } from "react-router-dom";
import { AboutMeModal } from "../../components/AboutMeModal";
import { ContactModal } from "../../components/ContactModal";
import { PortContext } from "../../contexts/PortContext";
import { StyledHomePage } from "./styles";
import alexandraMiranda from "../../img/Alexandra Miranda.png";

export function HomePage() {
  const {
    aboutMeModalIsOpen,
    contactModalIsOpen,
    handleAboutMeModal,
    handleContactModal,
  } = useContext(PortContext);
  return (
    <>
      <StyledHomePage>
        <header className="headerHome">
          <img src={alexandraMiranda} alt="meu nome" />
          <div className="headerMenuHome">
            <Link to="/" className="navegationHome">
              Home
            </Link>
            <Link
              component="button"
              onClick={() => {
                handleAboutMeModal();
              }}
              className="navegation"
            >
              Sobre mim
            </Link>
            <Link to="/curriculum" className="navegation">
              Currículo
            </Link>
            <Link to="/projects" className="navegation">
              Projetos
            </Link>
            <Link
              component="button"
              onClick={() => {
                handleContactModal();
              }}
              className="navegation"
            >
              Contato
            </Link>
          </div>
        </header>
        <main className="mainHome">
          <section className="apresentationHome">
            <p className="welcome">Olá! Eu sou </p>
            <h1 className="occupation">Desenvolvedora Web Front End</h1>
            <p className="aBitOfMe">
              Meu contato com tecnologia começou com montagem e manutenção de
              computadores e jogos de videogame. Sou da área administrativa,
              porém não estava me encontrando mais na profissão e por isso,
              escolhi a programação,  porque além de ser essencial para a
              sociedade, também proporciona muitas oportunidades no mercado de
              trabalho.
            </p>
            <button className="btCurriculo">Currículo</button>
          </section>
        </main>
      </StyledHomePage>
      {aboutMeModalIsOpen && <AboutMeModal />}
      {contactModalIsOpen && <ContactModal />}
    </>
  );
}
