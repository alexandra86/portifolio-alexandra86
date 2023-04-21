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
    max-width: 31.25rem;
    height: 18.75rem;
    width: 100%;
    border-radius: 0.5rem;
    background-color: #000000;
    border: 0.25rem solid #a5b82e;
    animation: animation 1.5s ease-in;
    transform: 1.5s ease-in;
  }
  .headerModal {
    max-width: 31.25rem;
    width: 100%;
    height: 3.125rem;
    padding: 0.75rem 1.25rem;
    display: flex;
    align-items: center;
    justify-content: flex-end;
  }
  .titleModal {
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
  .divContact {
    margin-top: 2.75rem;
    max-width: 31.25rem;
    width: 100%;
    padding: 0rem 0.625rem 0rem 0.625rem;
    display: flex;
    align-items: center;
    justify-content: space-evenly;
  }
  .linkedinImage {
    height: 5.625rem;
  }
  .gitHubImage {
    height: 5.625rem;
  }
  .whatsAppImage {
    height: 5.625rem;
  }
  @media (max-width: 34.375rem) {
    .modalContent {
      width: 80%;
      height: 15.75rem;
    }
    .divContact {
      justify-content: space-evenly;
    }
    .linkedinImage {
      height: 3.813rem;
    }
    .gitHubImage {
      height: 3.813rem;
    }
    .whatsAppImage {
      height: 3.813rem;
    }
  }
  @media (max-width: 30.125rem) {
    .modalContent {
      width: 80%;
      height: 14.75rem;
    }
    .divContact {
      justify-content: space-evenly;
    }
    .titleModal {
      font-size: 1.125rem;
    }
    .linkedinImage {
      height: 3.813rem;
    }
    .gitHubImage {
      height: 3.813rem;
    }
    .whatsAppImage {
      height: 3.813rem;
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
