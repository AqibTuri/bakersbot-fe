import { Navigate, useLocation } from "react-router-dom";
import { useData } from "../features/Context.jsx";
import AppLayout from "../Layouts/AppLayout.jsx";

export const PrivateRoute = ({ children }) => {
  const { user } = useData();

  const location = useLocation();

  if (!user) {
    return <Navigate to="/login" state={{ from: location }} replace />;
  }

  return <AppLayout>{children}</AppLayout>;
};
