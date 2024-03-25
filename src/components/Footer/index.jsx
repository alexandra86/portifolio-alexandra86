import { StyledFooter } from "./style";

export const Footer = () => {
  return (
    <StyledFooter>
      <p className="descriptionFooter">
        {" "}
        {new Date().getFullYear()} - All rights reserved to Alexandra Miranda{" "}
      </p>
    </StyledFooter>
  );
};
