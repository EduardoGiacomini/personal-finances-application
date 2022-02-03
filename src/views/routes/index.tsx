import { PrivateRoute } from "./private.route";
import { PublicRoute } from "./public.route";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { SignIn, SignUp } from "../pages/public";
import React from "react";

export function ApplicationRoutes() {
  return (
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
              <SignIn />
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
  );
}
