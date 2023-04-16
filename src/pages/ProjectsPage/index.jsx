import React from "react";
import { StyledProjectsPage } from "./styles";
import alexandraMiranda from "../../img/Alexandra Miranda.png";
import { Link } from "react-router-dom";
import kenziHub from "../../img/kenzie_hub.png";
import hamburgueria from "../../img/hamburgueria.png";
import hamburgueriaDois from "../../img/hamburgueria_2_0.png";

export function ProjectsPage() {
  return (
    <StyledProjectsPage>
      <header className="headerPojectsPage">
        <img src={alexandraMiranda} alt="meu nome" className="myName" />
        <Link to="/" className="navegationToBackHome">
          Home
        </Link>
      </header>
      <main className="mainProjects">
        <ul className="areaCards">
          <li className="cardsProjects">
            <img
              src={hamburgueria}
              alt="Projeto Hamburgueria"
              className="imageProject"
            />
            <div className="divLinksCards">
              <Link
                to="https://github.com/alexandra86/react-entrega-template-hamburgueria-da-kenzie-alexandra86"
                target="_blank"
                className="goToRepository"
              >
                Repositório
              </Link>
              <Link
                to="https://react-entrega-template-hamburgueria-da-kenzie-alexandra86.vercel.app/"
                target="_blank"
                className="seeMore"
              >
                Verificar
              </Link>
            </div>
          </li>

          <li className="cardsProjects">
            <img
              src={kenziHub}
              alt="Projeto Kenzie Hub"
              className="imageProject"
            />
            <div className="divLinksCards">
              <Link
                to="https://github.com/alexandra86/react-entrega-kenzie-hub-alexandra86"
                target="_blank"
                className="goToRepository"
              >
                Repositório
              </Link>
              <Link
                to="https://react-entrega-kenzie-hub-alexandra86.vercel.app/"
                target="_blank"
                className="seeMore"
              >
                Verificar
              </Link>
            </div>
          </li>

          <li className="cardsProjects">
            <img
              src={hamburgueriaDois}
              alt="Projeto Hamburgueria 2.0"
              className="imageProject"
            />
            <div className="divLinksCards">
              <Link
                to="https://github.com/alexandra86/react-entrega-hamburgueria-v2-alexandra86"
                target="_blank"
                className="goToRepository"
              >
                Repositório
              </Link>
              <Link
                to="https://react-entrega-hamburgueria-v2-alexandra86.vercel.app/"
                target="_blank"
                className="seeMore"
              >
                Verificar
              </Link>
            </div>
          </li>
        </ul>
      </main>
    </StyledProjectsPage>
  );
}
