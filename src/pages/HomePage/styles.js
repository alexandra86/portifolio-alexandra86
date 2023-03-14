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
    gap: 21.313rem;
  }

  .headerMenuHome {
    max-width: 33.5rem;
    width: 100%;
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

  .mainHome {
    margin-top: 2.75rem;
    max-width: 81.563rem;
    width: 100%;
    display: flex;
    padding: 2.688rem 8.875rem 0rem 8.438rem;
  }
  .apresentationHome {
    max-width: 100%;
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
    max-width: 37.063rem;
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
  }
`;
