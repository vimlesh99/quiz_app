import React from "react";
import { Navigate, Outlet, useLocation } from "react-router-dom";
import { LOGIN_VALUE } from "../configs/appConfig";

const ProtectedRoute = () => {
  
  if (!LOGIN_VALUE) {
    return <Navigate to={`/login`} replace />;
  }

  return <Outlet />;
};

export default ProtectedRoute;
