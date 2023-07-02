import { Outlet, Navigate } from "react-router-dom";

const ProtectedRoutePassenger = () => {
  const passenger = localStorage.getItem("adult");
  return <>{passenger > 0 ? <Outlet /> : <Navigate to="/" />}</>;
};

export default ProtectedRoutePassenger;
