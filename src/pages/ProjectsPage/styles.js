import styled from "styled-components";

export const StyledProjectsPage = styled.div`
  max-width: 100vw;
  width: 100%;
  height: 100vh;
  display: flex;
  justify-content: flex-start;
  align-items: center;
  flex-direction: column;
  background-color: #000000;

  .headerPojectsPage {
    max-width: 81.563rem;
    width: 100%;
    height: 3.875rem;
    display: flex;
    align-items: center;
    justify-content: space-between;
    padding: 10px 20px 0px 20px;
  }

  .navegationToBackHome {
    font-family: "Roboto", sans-serif;
    font-weight: 700;
    font-size: 1.125rem;
    color: #a5b82e;
  }

  .navegationToBackHome:hover {
    color: #ffffff;
    -webkit-transform: scale(1.1);
    -ms-transform: scale(1.1);
  }

  .mainProjects {
    margin-top: 2.75rem;
    max-width: 81.563rem;
    width: 100%;
    background-color: #000000;
  }

  .areaCards {
    margin-top: 2.75rem;
    margin-bottom: 0.75rem;
    display: flex;
    gap: 17px;
    background-color: #000000;
    border-radius: 0.5rem;
    width: 100%;
    flex-wrap: wrap;
  }

  .cardsProjects {
    max-width: 18.75rem;
    width: 300px;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    border-radius: 0.5rem;
    animation: cards 1.5s ease-in;
  }

  .cardsProjects:hover {
    border: 0.094rem solid #a5b82e;
  }

  .titleProjects {
    margin-top: 0.625rem;
    margin-bottom: 0.625rem;
    font-family: "Roboto", sans-serif;
    font-weight: 700;
    font-size: 0.875rem;
    color: #ffffff;
  }

  .imageProject {
    margin-top: 0.625rem;
    width: 15.625rem;
    height: 10.625rem;
    border-radius: 0.5rem;
  }
  .divLinksCards {
    margin-top: 1.563rem;
    margin-bottom: 0.625rem;
    max-width: 15.625rem;
    width: 100%;
    display: flex;
    justify-content: center;
    align-items: center;
    gap: 2.188rem;
  }

  .goToRepository {
    font-family: "Roboto", sans-serif;
    font-weight: 700;
    font-size: 0.875rem;
    color: #ffffff;
  }
  .goToRepository:hover {
    -webkit-transform: scale(1.1);
    -ms-transform: scale(1.1);
    color: #8776d5;
  }

  .seeMore {
    font-family: "Roboto", sans-serif;
    font-weight: 700;
    font-size: 0.875rem;
    color: #a5b82e;
  }
  .seeMore:hover {
    -webkit-transform: scale(1.1);
    -ms-transform: scale(1.1);
    color: #8776d5;
  }
  @media (max-width: 68.5rem) {
    .headerPojectsPage {
      padding: 2.688rem 2rem 0rem 2rem;
    }
    .mainProjects {
      padding: 2.688rem 2rem 0rem 2rem;
    }
    .areaCards {
      display: flex;
      gap: 1rem;
    }
    .cardsProjects {
      max-width: 100%;
      margin-bottom: 0.938rem;
    }
  }
  @media (max-width: 56.25rem) {
    .cardsProjects {
      padding: 0rem 1rem 0rem 1rem;
    }
    .imageProject {
      width: 14.563rem;
    }
    .areaCards {
      flex-wrap: nowrap;
      overflow: scroll;
      justify-content: flex-start;
    }
  }

  @media (max-width: 34.375rem) {
    .myName {
      width: 66%;
    }
    .navegationToBackHome {
      font-size: 1rem;
    }
    .cardsProjects {
      padding: 0rem 1rem 0rem 1rem;
    }
    .imageProject {
      width: 14.563rem;
    }
    .areaCards {
      flex-wrap: nowrap;
      overflow: scroll;
      justify-content: flex-start;
    }
  }

  @keyframes cards {
    from {
      opacity: 0;
      transform: translateX(-70%);
    }
    to {
      opacity: 1;
      transform: translateX(0%);
    }
  }
`;
