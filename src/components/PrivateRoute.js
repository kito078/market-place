import React, { useRef } from "react";
import { Navigate, Outlet } from "react-router-dom";
import { UseAuthStatus } from "../hooks/UseAuthStatus";

function PrivateRoute() {
  // const { loggedIn, checkingStatus } = UseAuthStatus();

  // if (checkingStatus) {
  //   return <h3>Loading</h3>;
  // }

  const loggedIn = false;
  return loggedIn ? <Outlet /> : <Navigate to="/sign-in" />;
}

export default PrivateRoute;
