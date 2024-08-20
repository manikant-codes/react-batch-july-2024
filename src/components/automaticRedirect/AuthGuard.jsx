import React, { useContext } from "react";
import { userContext } from "../../App";
import { Navigate } from "react-router-dom";

function AuthGuard({ children }) {
  const { user } = useContext(userContext);

  if (!user) {
    return <Navigate to="/" />;
  }

  return <>{children}</>;
}

export default AuthGuard;
