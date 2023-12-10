import React from "react";
import { Navigate, Outlet, useLocation } from "react-router-dom";
import { LOGIN_VALUE } from "../configs/appConfig";

const LoginRoute = () => {
  if (LOGIN_VALUE) {
    return <Navigate to={`/quiz_app`} replace />;
  }

  return <Outlet />;
};

export default LoginRoute;
