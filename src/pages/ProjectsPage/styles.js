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
    padding: 2.688rem 8.875rem 0rem 8.438rem;
  }

  .navegationToBackHome {
    font-family: "Roboto", sans-serif;
    font-weight: 700;
    font-size: 18px;
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
    padding: 2.688rem 8.875rem 0rem 8.438rem;
    background: #000000;
  }

  .areaCards{
    margin-top: 2.75rem;
    display:flex;
    align-items:center;
    gap: 25px;
  }

  .cardsProjects {
    height: 346px
    max-width: 300px;
    width: 100%;
    display:flex;
    flex-direction:column;
    justify-content:center;
    align-items:center;
    border-radius:8px;
    animation: animation 1.5s ease-in;
  }

  .cardsProjects:hover{
    border: 1.5px solid #a5b82e;
  }

  .imageProject {
    margin-top: 10px;
    width: 250px;
    height: 250px;
    border-radius:8px;
  }
  .divLinksCards{
    margin-top: 25px;
    margin-bottom: 10px;
    max-width: 250px;
    width: 100%;
    display:flex;
    justify-content: space-between;
    align-items:center;
  }


  .goToRepository {
    font-family: "Roboto", sans-serif;
    font-weight: 700;
    font-size: 0.875rem;
    color: #ffffff;
  }
  .goToRepository:hover{
    -webkit-transform: scale(1.1);
    -ms-transform: scale(1.1);
  }

  .seeMore {
    font-family: "Roboto", sans-serif;
    font-weight: 700;
    font-size: 0.875rem;
    color: #a5b82e;
  }
  .seeMore:hover{
    -webkit-transform: scale(1.1);
    -ms-transform: scale(1.1);
  }

  @keyframes animation {
    from {
      opacity: 0;
      transform: translateY(-70%);
    }
    to {
      opacity: 1;
      transform: translateY(0%);
    }
  }
`;
