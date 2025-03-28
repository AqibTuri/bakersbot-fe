import { Route, Routes } from "react-router-dom";
import Login from "../pages/Authentication/Login.jsx";
import LandingPage from "../pages/LandingPage/index.jsx";
import PostPurchase from "../pages/PostPurchase/index.jsx";
import PrePurchase from "../pages/PrePurchase/index.jsx";

const AppRoutes = () => {
  return (
    <Routes>
      <Route path="/" element={<LandingPage />} />
      <Route path="/pre-purchase" element={<PrePurchase />} />
      <Route path="/post-purchase" element={<PostPurchase />} />
      <Route path="/login" element={<Login />} />
    </Routes>
  );
};

export default AppRoutes;
