import React from "react";
import ReactDOM from "react-dom";
import { ThemeProvider } from "styled-components";
import { UserWrapper } from "./infra/views/context/user";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { SignIn, SignUp } from "./infra/views/pages/public";
import { theme } from "./infra/vendors";
import { reportWebVitals } from "./infra/assets/analytics";
import "./infra/assets/styles/index.css";

import { AccountAxiosApi } from "./infra/adapters/apis";
import { PrivateRoute, PublicRoute } from "./infra/views/routes";

ReactDOM.render(
  <React.StrictMode>
    <ThemeProvider theme={theme}>
      <UserWrapper>
        <BrowserRouter>
          <Routes>
            <Route
              path="/"
              element={
                <PrivateRoute>
                  <h1>Dashboard</h1>
                </PrivateRoute>
              }
            />
            <Route
              path="/sign-in"
              element={
                <PublicRoute>
                  <SignIn accountApi={new AccountAxiosApi()} />
                </PublicRoute>
              }
            />
            <Route
              path="/sign-up"
              element={
                <PublicRoute>
                  <SignUp />
                </PublicRoute>
              }
            />
          </Routes>
        </BrowserRouter>
      </UserWrapper>
    </ThemeProvider>
  </React.StrictMode>,
  document.getElementById("root")
);

reportWebVitals();
