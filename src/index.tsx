import React from "react";
import ReactDOM from "react-dom";
import { ThemeProvider } from "styled-components";
import { theme } from "./vendors";
import { UserWrapper } from "./views/context/user";
import { ApplicationRoutes } from "./views/routes";
import { reportWebVitals } from "./assets/analytics";
import "./assets/styles/index.css";

ReactDOM.render(
  <React.StrictMode>
    <ThemeProvider theme={theme}>
      <UserWrapper>
        <ApplicationRoutes />
      </UserWrapper>
    </ThemeProvider>
  </React.StrictMode>,
  document.getElementById("root")
);

reportWebVitals();
