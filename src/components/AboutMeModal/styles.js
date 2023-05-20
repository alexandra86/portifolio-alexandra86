import styled from "styled-components";

export const StyledContainerModal = styled.div`
  height: 100%;
  width: 100%;
  background-color: rgba(0, 0, 0, 0.5);
  position: fixed;
  top: 0;
  left: 0;
  display: flex;
  align-items: center;
  justify-content: center;

  .modalContent {
    max-width: 43.75rem;
    height: 28.125rem;
    width: 100%;
    border-radius: 0.5rem;
    background-color: #000000;
    border: 0.25rem solid #a5b82e;
    animation: aboutMe 1.5s ease-in;
    transform: 1.5s ease-in;
  }
  .headerModal {
    max-width: 43.75rem;
    width: 100%;
    height: 3.125rem;
    padding: 0.75rem 1.25rem;
    display: flex;
    align-items: center;
    justify-content: flex-end;
  }
  .titleAboutMeModal {
    text-align: center;
    color: #ffffff;
    font-family: "Roboto", sans-serif;
    font-weight: 600;
    font-size: 1.625rem;
  }
  .btCloseModal {
    max-width: 0.75rem;
    width: 100%;
    height: 1.5rem;
    color: rgba(255, 255, 255, 0.5);
    font-family: "Roboto", sans-serif;
    font-weight: 500;
    font-size: 1rem;
  }
  .btCloseModal:hover {
    -webkit-transition: scale(1.1);
    -webkit-transform: scale(1.1);
    color: #ffffff;
  }
  .divAboutMeALittle {
    max-width: 43.75rem;
    width: 100%;
    padding: 0rem 0.938rem 0rem 0.938rem;
  }
  .aboutMeALittle {
    margin-top: 1.25rem;
    text-align: justify;
    color: #ffffff;
    font-family: "Roboto", sans-serif;
    font-weight: 500;
    font-size: 1.125rem;
    line-height: 1.438rem;
  }
  .titleHardSkills {
    margin-top: 0.875rem;
    text-align: center;
    color: #ffffff;
    font-family: "Roboto", sans-serif;
    font-weight: 600;
    font-size: 1.25rem;
  }
  .techs {
    margin-top: 1.25rem;
    width: 100%;
    display: flex;
    align-items: center;
    object-fit: cover;
    flex-wrap: wrap;
    justify-content: space-around;
  }
  .techIcon {
    width: 2.813rem;
    height: 2.813rem;
    border-radius: 0.125rem;
  }

  .titleSoftSkills {
    margin-top: 1.875rem;
    text-align: center;
    color: #ffffff;
    font-family: "Roboto", sans-serif;
    font-weight: 600;
    font-size: 1.25rem;
  }

  .mySoftSkill {
    margin-top: 1.25rem;
    text-align: center;
    color: #ffffff;
    font-family: "Roboto", sans-serif;
    font-weight: 500;
    font-size: 1.125rem;
    line-height: 1.75rem;
  }

  @media (max-width: 34.375rem) {
    .modalContent {
      width: 84%;
      height: 31.125rem;
    }
  }
  @media (max-width: 30.125rem) {
    .modalContent {
      width: 84%;
    }
    .titleAboutMeModal {
      font-size: 1.125rem;
    }
    .divAboutMeALittle {
      width: 97%;
    }
    .aboutMeALittle {
      text-align: flex-start;
      font-size: 0.875rem;
    }
    .titleHardSkills {
      font-size: 1.125rem;
    }
    .techIcon {
      width: 1.813rem;
      height: 1.813rem;
    }
    .titleSoftSkills {
      font-size: 1.125rem;
    }
    .mySoftSkill {
      font-size: 0.875rem;
      line-height: 1.313rem;
    }
  }

  @keyframes aboutMe {
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
