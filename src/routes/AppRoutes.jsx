import { Route, Routes } from "react-router-dom";
import BasicLayout from "../Layouts/BasicLayout.jsx";
import Login from "../pages/Authentication/Login.jsx";
import ContactUs from "../pages/ContactUs/index.jsx";
import FAQPage from "../pages/Faqs/index.jsx";
import LandingPage from "../pages/LandingPage/index.jsx";
import PostPurchase from "../pages/PostPurchase/index.jsx";
import PrePurchase from "../pages/PrePurchase/index.jsx";
import Dashboard from "../pages/Dashboard/index.jsx";

const AppRoutes = () => {
  return (
    <Routes>
      <Route
        path="/"
        element={
          <BasicLayout>
            <LandingPage />
          </BasicLayout>
        }
      />
      <Route
        path="/pre-purchase"
        element={
          <BasicLayout>
            <PrePurchase />
          </BasicLayout>
        }
      />
      <Route
        path="/post-purchase"
        element={
          <BasicLayout>
            <PostPurchase />
          </BasicLayout>
        }
      />
      <Route
        path="/dashboard"
        element={
          <BasicLayout>
            <Dashboard />
          </BasicLayout>
        }
      />
      <Route
        path="/contact-us"
        element={
          <BasicLayout>
            <ContactUs />
          </BasicLayout>
        }
      />

      <Route
        path="/faqs"
        element={
          <BasicLayout>
            <FAQPage />
          </BasicLayout>
        }
      />

      <Route path="/login" element={<Login />} />
    </Routes>
  );
};

export default AppRoutes;
