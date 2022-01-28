import React from "react";
import ReactDOM from "react-dom";
import { ThemeProvider } from "styled-components";
import { UserWrapper } from "./infra/context/user";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { SignIn, SignUp } from "./infra/views/pages/public";
import { theme } from "./infra/vendors";
import { reportWebVitals } from "./infra/assets/analytics";
import "./infra/assets/styles/index.css";

ReactDOM.render(
  <React.StrictMode>
    <ThemeProvider theme={theme}>
      <UserWrapper>
        <BrowserRouter>
          <Routes>
            <Route path="/" element={<SignIn />} />
            <Route path="/sign-up" element={<SignUp />} />
          </Routes>
        </BrowserRouter>
      </UserWrapper>
    </ThemeProvider>
  </React.StrictMode>,
  document.getElementById("root")
);

reportWebVitals();
