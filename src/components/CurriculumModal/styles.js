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
    height: 24.125rem;
    width: 100%;
    border-radius: 0.5rem;
    background-color: #000000;
    border: 0.25rem solid #a5b82e;
    animation: curriculum 1.5s ease-in;
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
  .titleMessage {
    text-align: center;
    color: #a5b82e;
    font-family: "Roboto", sans-serif;
    font-weight: 600;
    font-size: 1.625rem;
    animation: animate 1s linear infinite;
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

  .divCurriculumMessage {
    margin-top: 2.188rem;
    max-width: 43.75rem;
    width: 100%;
    padding: 0rem 0.938rem 0rem 0.938rem;
    display: grid;
    justify-items: center;
    align-content: space-between;
  }

  .curriculumMessage {
    width: 100%;
    margin-bottom: 0.938rem;
    text-align: justify;
    color: #ffffff;
    font-family: "Roboto", sans-serif;
    font-weight: 500;
    font-size: 1.125rem;
    line-height: 2rem;
  }
  .btGoToCurriculum {
    margin-top: 0.938rem;
    max-width: 10.25rem;
    width: 100%;
    height: 3.115rem;
    background-color: none;
    border: 0.125rem solid #ffffff;
    border-radius: 0.5rem;
    font-family: "Roboto", sans-serif;
    font-weight: 700;
    font-size: 1rem;
    color: #ffffff;
  }
  .btGoToCurriculum:hover {
    background-color: #a5b82e;
    border: 0.125rem solid #000000;
    color: #000000;
  }
  @media (max-width: 45rem) {
    .modalContent {
      width: 90%;
    }
  }
  @media (max-width: 34.375rem) {
    .modalContent {
      width: 84%;
    }
    .curriculumMessage {
      font-size: 0.875rem;
      line-height: 1.75rem;
    }
  }
  @media (max-width: 30.125rem) {
    .modalContent {
      width: 84%;
    }
    .titleMessage {
      font-size: 1.125rem;
    }
    .curriculumMessage {
      font-size: 0.875rem;
      line-height: 1.625rem;
      text-align: center;
    }
    .btGoToCurriculum {
      width: 80%;
    }
  }
  @keyframes curriculum {
    from {
      opacity: 0;
      transform: translateY(-70%);
    }
    to {
      opacity: 1;
      transform: translateY(0%);
    }
  }
  @keyframes animate {
    0% {
      opacity: 0;
    }
    50% {
      opacity: 0.7;
    }
    100% {
      opacity: 0;
    }
  }
`;
