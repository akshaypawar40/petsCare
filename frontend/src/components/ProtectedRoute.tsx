import React from "react";
import { useSelector } from "react-redux";
import { RootState } from "../redux/store";
import { Navigate } from "react-router-dom";

interface proetectprop {
  element: JSX.Element;
}

const ProtectedRoute: React.FC<proetectprop> = ({ element }) => {
  const { userInfo } = useSelector((state: RootState) => state.user);

  return userInfo ? element : <Navigate to="/login" />;
};

export default ProtectedRoute;
