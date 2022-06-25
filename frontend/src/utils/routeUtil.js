import React from "react";
import { useSelector } from "react-redux";
import { Navigate, Outlet } from "react-router-dom";

export const AuthRoute = () => {
  const loggedIn = useSelector((state) => state.session.isAuthenticated);
  return !loggedIn ? <Outlet /> : <Navigate to="/" replace />;
};

export const ProtectedRoute = () => {
  const loggedIn = useSelector((state) => state.session.isAuthenticated);
  return loggedIn ? <Outlet /> : <Navigate to="/login" replace />;
};
