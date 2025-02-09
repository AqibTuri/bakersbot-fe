import { Route, Routes } from "react-router-dom";
import Login from "../pages/Authentication/Login.jsx";
import LandingPage from "../pages/LandingPage/index.jsx";

const AppRoutes = () => {
  return (
    <Routes>
      <Route path="/" element={<LandingPage />} />
      <Route path="/login" element={<Login />} />
    </Routes>
  );
};

export default AppRoutes;
