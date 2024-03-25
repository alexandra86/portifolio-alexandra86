import React, { useContext } from "react";
import { Link } from "react-router-dom";
import { AboutMeModal } from "../../components/AboutMeModal";
import { ContactModal } from "../../components/ContactModal";
import { PortContext } from "../../contexts/PortContext";
import { StyledHomePage } from "./styles";
import alexandraMiranda from "../../img/Alexandra Miranda.png";
import eu from "../../img/eu_2023.jpg";
import { CurriculuModal } from "../../components/CurriculumModal";
import { Footer } from "../../components/Footer";

export function HomePage() {
  const {
    aboutMeModalIsOpen,
    contactModalIsOpen,
    curriculuModalIsOpen,
    HandleAboutMeModal,
    HandleContactModal,
    HandleCurriculuModal,
  } = useContext(PortContext);

  return (
    <>
      <StyledHomePage>
        <header className="headerHome">
          <img src={alexandraMiranda} alt="meu nome" className="myName" />
          <div className="headerMenuHome">
            <Link to="/" className="navegationHome">
              Home
            </Link>
            <Link
              component="button"
              onClick={() => {
                HandleAboutMeModal();
              }}
              className="navegation"
            >
              Sobre
            </Link>
            <Link
              component="button"
              onClick={() => {
                HandleCurriculuModal();
              }}
              className="navegation"
            >
              Currículo
            </Link>
            <Link to="/projects" className="navegation">
              Projetos
            </Link>
            <Link
              component="button"
              onClick={() => {
                HandleContactModal();
              }}
              className="navegation"
            >
              Contato
            </Link>
          </div>
        </header>
        <main className="mainHome">
          <section className="sectionHome">
            <div className="apresentationHome">
              <p className="welcome">Olá! Eu sou </p>
              <h1 className="occupation">Desenvolvedora Web Full Stack</h1>
              <p className="aBitOfMe">
                Possuo formação técnica como Desenvolvedora Web Full Stack e
                atualmente faço faculdade de Análise e Desenvolvimento de
                Sistemas. Sempre gostei de tecnologia e decidi fazer migração de
                carreira para a programação, pois desejo unir minha paixão com a
                criação de soluções lógicas, que venham contribuir para o
                desenvolvimento de toda a sociedade! &#x1F609;
              </p>
              <button
                className="btCurriculo"
                onClick={() => HandleCurriculuModal()}
              >
                Currículo
              </button>
            </div>
            <div className="AlexandraPhoto">
              <img src={eu} alt="foto de Alexandra" className="eu" />
            </div>
          </section>
        </main>
        <Footer />
      </StyledHomePage>
      {aboutMeModalIsOpen && <AboutMeModal />}
      {curriculuModalIsOpen && <CurriculuModal />}
      {contactModalIsOpen && <ContactModal />}
    </>
  );
}
