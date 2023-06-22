import React from "react";
import { Outlet, Navigate } from "react-router-dom";
import { useSelector } from "react-redux";

const ProtectedRouteUser = ({ component: Component, ...props }) => {
  const { isLoggedIn } = useSelector((state) => state.authReducer);
  return <>{isLoggedIn ? <Outlet /> : <Navigate to="/no-access-user" />}</>;
};

export default ProtectedRouteUser;
