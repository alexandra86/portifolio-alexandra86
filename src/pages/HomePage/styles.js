import styled from "styled-components";

export const StyledHomePage = styled.div`
  max-width: 100vw;
  width: 100%;
  height: 100vh;
  display: flex;
  justify-content: flex-start;
  align-items: center;
  flex-direction: column;
  background-color: #000000;

  .headerHome {
    max-width: 81.563rem;
    width: 100%;
    height: 3.875rem;
    display: flex;
    align-items: center;
    justify-content: space-between;
    padding: 2.688rem 8.875rem 0rem 8.438rem;
  }

  .headerMenuHome {
    max-width: 50%;
    height: 2.875rem;
    display: flex;
    align-items: center;
    gap: 1.25rem;
  }

  .navegationHome {
    font-family: "Roboto", sans-serif;
    font-weight: 700;
    font-size: 0.875rem;
    color: #a5b82e;
  }

  .navegation {
    font-family: "Roboto", sans-serif;
    font-weight: 700;
    font-size: 0.875rem;
    color: #ffffff;
  }

  .myName {
    animation: floatingText 7s linear infinite;
  }

  .mainHome {
    margin-top: 2.75rem;
    max-width: 81.563rem;
    width: 100%;
    padding: 2.688rem 8.875rem 0rem 8.438rem;
    background: #000000;
  }

  .sectionHome {
    max-width: 81.563rem;
    width: 100%;
    display: flex;
  }

  .apresentationHome {
    max-width: 65%;
    width: 100%;
  }
  .welcome {
    font-family: "Roboto", sans-serif;
    font-weight: 700;
    font-size: 1rem;
    color: #ffffff;
    margin-bottom: 2.935rem;
  }
  .occupation {
    font-family: "Roboto", sans-serif;
    font-weight: 700;
    font-size: 1.875rem;
    color: #ffffff;
    margin-bottom: 4.373rem;
  }

  .aBitOfMe {
    margin-bottom: 7.608rem;
    max-width: 28.063rem;
    width: 100%;
    height: 10.064rem;
    font-family: "Roboto", sans-serif;
    font-weight: 700;
    font-size: 1rem;
    text-align: justify;
    line-height: 1.75rem;
    color: #ffffff;
  }

  .btCurriculo {
    max-width: 10.25rem;
    width: 100%;
    height: 3.115rem;
    background-color: none;
    border: 0.125rem solid #ffffff;
    border-radius: 0.5rem;
    font-family: "Roboto", sans-serif;
    font-weight: 700;
    font-size: 0.875rem;
    color: #ffffff;
  }
  .btCurriculo:hover {
    background-color: #a5b82e;
    color: #000000;
    border: 0.125rem solid #000000;
  }

  .AlexandraPhoto {
    max-width: 35%;
    width: 100%;
  }
  .eu {
    width: 100%;
    box-shadow: 0.188rem 0.188rem #a5b82e, -1em 0 0.4em #a5b82e;
    border-radius: 0.5rem;
    animation: goBack 1s infinite alternate;
  }

  @media (max-width: 68.5rem) {
    .headerHome {
      height: 9.375rem;
      flex-direction: column;
    }

    .headerMenuHome {
      margin-top: 1.25rem;
      height: 0rem;
    }
    .divAboutMeALittle {
      width: 100%;
      text-align: center;
      padding: 0;
    }
    .sectionHome {
      flex-direction: column-reverse;
      align-items: center;
      justify-content: center;
    }
    .apresentationHome {
      max-width: 100%;
      margin-top: 5%;
      display: flex;
      flex-direction: column;
      justify-content: center;
      align-items: center;
    }
    .btCurriculo {
      margin-bottom: 5%;
    }
  }
  @media (max-width: 56.25rem) {
    .headerHome {
      flex-direction: column;
      align-items: center;
      justify-content: center;
      text-align: center;
      padding: 2.688rem 2rem 0rem 2rem;
    }

    .headerMenuHome {
      max-width: 100%;
      height: 0.625rem;
    }

    .mainHome {
      padding: 2.688rem 2rem 0rem 2rem;
    }
    .apresentationHome {
      max-width: 100%;
      margin-bottom: 2.5rem;
      display: flex;
      flex-direction: column;
      justify-content: center;
      align-items: center;
    }
  }

  @media (max-width: 34.375rem) {
    .headerMenuHome {
      max-width: 100%;
      gap: 0.375rem;
    }
    .mainHome {
      padding: 2.688rem 2.438rem 0rem 2.438rem;
    }

    .sectionHome {
      flex-direction: column;
    }

    .apresentationHome {
      max-width: 100%;
      margin-bottom: 2.5rem;
      display: flex;
      flex-direction: column;
      justify-content: center;
      align-items: center;
    }
    .occupation {
      text-align: center;
    }

    .AlexandraPhoto {
      max-width: 85%;
      display: flex;
      align-items: center;
    }

    .eu {
      max-width: 95%;
      margin-bottom: 2.5rem;
    }
    .btCurriculo {
      margin-top: 8.125rem;
    }
    .myName {
      width: 80%;
    }
  }

  @keyframes floatingText {
    0%,
    50%,
    100% {
      transform: rotate(0);
    }
    25% {
      transform: rotate(-5deg);
    }
    75% {
      transform: rotate(5deg);
    }
  }

  @keyframes goBack {
    from {
      transform: translateX(100px);
    }
    to {
      transform: translateX(0);
    }
  }
`;
