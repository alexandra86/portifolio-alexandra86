import { createGlobalStyle } from "styled-components";

export const GlobalStyle = createGlobalStyle`
*{
    margin: 0;
    padding: 0;
    box-sizing:border-box;
      
}
body,
html {
  overflow-x: hidden !important;
  background-color: #000000;

  ::-webkit-scrollbar {
    width: 0.5rem;
  }

  ::-webkit-scrollbar-thumb {
    background-color: #a5b82e;
  }

  ::-webkit-scrollbar-thumb:hover {
    background-color: #8776D5;
    
  }
}

ul, ol, li{
    list-style-type: style none;
}

a{
    text-decoration:none;
}

button{
    cursor: pointer;
    background-color:transparent;
    border:none;
}
`;
