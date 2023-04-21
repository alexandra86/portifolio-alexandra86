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
    padding: 2.688rem 8.875rem 0rem 8.438rem;
    background: #000000;
  }

  .areaCards{
    margin-top: 2.75rem;
    display:flex;
    align-items:center;
    gap: 1.563rem;
    
  }

  .cardsProjects {
    height: 21.625rem
    max-width: 18.75rem;
    width: 100%;
    display:flex;
    flex-direction:column;
    justify-content:center;
    align-items:center;
    border-radius:0.5rem;
    animation: animation 1.5s ease-in;
    
  }

  .cardsProjects:hover{
    border: 0.094rem solid #a5b82e;
  }

  .imageProject {
    margin-top: 0.625rem;
    width: 15.625rem;
    height: 15.625rem;
    border-radius:0.5rem;
  }
  .divLinksCards{
    margin-top: 1.563rem;
    margin-bottom: 0.625rem;
    max-width: 15.625rem;
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
  @media (max-width: 68.5rem) {
    .headerPojectsPage {
    padding: 2.688rem 2rem 0rem 2rem;
  }
  .mainProjects {
    padding: 2.688rem 2rem 0rem 2rem;
  }
  .areaCards{
    overflow: scroll;
    gap: 1rem;
    display: flex;
  }
  .cardsProjects {
    max-width: 100%;
    margin-bottom: 0.938rem;
    
  }
}
@media (max-width: 56.25rem) {
    .cardsProjects {
    padding: 0rem 1rem 0rem 1rem
  }
  .imageProject{
    width: 14.563rem;
  }
}

  @media (max-width: 34.375rem) {
    .myName {
      width: 66%;
    }
    .navegationToBackHome{
      font-size: 1rem;
    }
    .cardsProjects {
    padding: 0rem 1rem 0rem 1rem
  }
  .imageProject{
    width: 14.563rem;
  }
  
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
