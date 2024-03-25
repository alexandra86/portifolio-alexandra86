import React, { useContext, useEffect } from "react";
import { StyledProjectsPage } from "./styles";
import alexandraMiranda from "../../img/Alexandra Miranda.png";
import { Link } from "react-router-dom";
import { projectDataBase } from "../../utils/projectsDatabase";
import { PortContext } from "../../contexts/PortContext";
import { LoadingPage } from "../../components/LoadingPage";
import { Footer } from "../../components/Footer";

export function ProjectsPage() {
  const { loadingPage, setLoadingPage } = useContext(PortContext);

  useEffect(() => {
    setTimeout(() => {
      setLoadingPage(true);
    }, 2000);
  }, [setLoadingPage]);

  return (
    <StyledProjectsPage>
      {!loadingPage && <LoadingPage />}
      <header className="headerPojectsPage">
        <img src={alexandraMiranda} alt="meu nome" className="myName" />
        <Link
          to="/"
          className="navegationToBackHome"
          onClick={() => setLoadingPage(false)}
        >
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
      <Footer />
    </StyledProjectsPage>
  );
}
