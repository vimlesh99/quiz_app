import React from "react";
import { Routes as RouterRoutes, Route, Navigate } from "react-router-dom";
import ProtectedRoute from "./ProtectedRoute";
import QuizApp from "../components/QuizApp";
import GradeComp from "../components/GradeComp";
import LoginRoute from "./LoginRoute";
import LoginPage from "../components/LoginPage";
import { AUTHENTICATED_ENTRY, UNAUTHENTICATED_ENTRY } from "../configs/appConfig";
const AppRoutes = () => {
  return (
    <RouterRoutes>
      <Route path="/" element={<ProtectedRoute />}>
        <Route path="/" element={<Navigate replace to={AUTHENTICATED_ENTRY} />} />
        <Route path="/quiz_app" element={<QuizApp />} />
        <Route path="/quiz_app/grade" element={<GradeComp />} />
        <Route path="*" element={<Navigate to="/" replace />} />
      </Route>
      <Route path="/" element={<LoginRoute />}>
        <Route path="/" element={<Navigate replace to={UNAUTHENTICATED_ENTRY} />} />
        <Route path="/login" element={<LoginPage />} />
      </Route>
    </RouterRoutes>
  );
};

export default AppRoutes;
