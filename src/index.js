import React from "react";
import ReactDOM from "react-dom/client";
import { BrowserRouter } from "react-router-dom";
import App from "./App";
import { PortProvider } from "./contexts/PortContext";
import { GlobalStyle } from "./style/styleGlobal";

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <React.StrictMode>
    <BrowserRouter>
      <GlobalStyle />
      <PortProvider>
        <App />
      </PortProvider>
    </BrowserRouter>
  </React.StrictMode>
);
