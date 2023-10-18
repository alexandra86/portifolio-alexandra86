import React from "react";
import { StyledProjectsPage } from "./styles";
import alexandraMiranda from "../../img/Alexandra Miranda.png";
import { Link } from "react-router-dom";
import { projectDataBase } from "../../utils/projectsDatabase";

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
          {projectDataBase.map((project, index) => (
            <li key={index} className="cardsProjects">
              <h2 className="titleProjects">{project.title}</h2>
              <img
                src={project.img}
                alt={project.title}
                className="imageProject"
              />
              <div className="divLinksCards">
                <Link
                  to={project.repositoryLink}
                  target="_blank"
                  className="goToRepository"
                >
                  Repositório
                </Link>
                {project.deployLink !== "" && (
                  <Link
                    to={project.deployLink}
                    target="_blank"
                    className="seeMore"
                  >
                    Verificar
                  </Link>
                )}
              </div>
            </li>
          ))}
        </ul>
      </main>
    </StyledProjectsPage>
  );
}
