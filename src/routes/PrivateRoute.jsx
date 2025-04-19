import { Navigate, useLocation } from "react-router-dom";
import { useData } from "../features/Context.jsx";
import BasicLayout from "../Layouts/BasicLayout.jsx";

export const PrivateRoute = ({ children }) => {
  const { user } = useData();

  const location = useLocation();

  if (!user) {
    return <Navigate to="/login" state={{ from: location }} replace />;
  }

  return <BasicLayout>{children}</BasicLayout>;
};
