import styled from "styled-components";

export const LoadingOverlay = styled.div`
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background-color: rgba(0, 0, 0, 0.7);
  display: flex;
  justify-content: center;
  align-items: center;
  z-index: 9999;

  .loadingPage {
    width: 3.438rem;
    height: 3.438rem;
    border-radius: 50%;
    background: #a5b82e;
    -webkit-mask: repeating-conic-gradient(
        #0000 0deg,
        #000 1deg 70deg,
        #0000 71deg 90deg
      ),
      radial-gradient(
        farthest-side,
        #0000 calc(100% - 0.563rem),
        #000 calc(100% - 0.5rem)
      );
    -webkit-mask-composite: destination-in;
    mask-composite: intersect;
    animation: spinAnimation 1s infinite;
  }

  @keyframes spinAnimation {
    to {
      transform: rotate(0.5turn);
    }
  }
`;
