import { Route, Routes } from "react-router-dom";
import BasicLayout from "../Layouts/BasicLayout.jsx";
import Login from "../pages/Authentication/Login.jsx";
import ContactUs from "../pages/ContactUs/index.jsx";
import FAQPage from "../pages/Faqs/index.jsx";
import LandingPage from "../pages/LandingPage/index.jsx";
import PostPurchase from "../pages/PostPurchase/index.jsx";
import PrePurchase from "../pages/PrePurchase/index.jsx";
import Dashboard from "../pages/Dashboard/index.jsx";
import PrivacyPolicy from "../pages/PrivacyPolicy/index.jsx";
import RefundPolicy from "../pages/RefundPolicy/index.jsx";
import TermsConditions from "../pages/TermsConditions/index.jsx";
import { PrivateRoute } from "./PrivateRoute.jsx";

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
          <PrivateRoute>
            <PrePurchase />
          </PrivateRoute>
        }
      />
      <Route
        path="/post-purchase"
        element={
          <PrivateRoute>
            <PostPurchase />
          </PrivateRoute>
        }
      />
      <Route
        path="/dashboard"
        element={
          <PrivateRoute>
            <Dashboard />
          </PrivateRoute>
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

      <Route
        path="/terms-conditions"
        element={
          <BasicLayout>
            <TermsConditions />
          </BasicLayout>
        }
      />
      <Route
        path="/privacy-policy"
        element={
          <BasicLayout>
            <PrivacyPolicy />
          </BasicLayout>
        }
      />

      <Route
        path="/refund-policy"
        element={
          <BasicLayout>
            <RefundPolicy />
          </BasicLayout>
        }
      />

      <Route
        path="/login"
        element={
          <BasicLayout>
            <Login />
          </BasicLayout>
        }
      />
    </Routes>
  );
};

export default AppRoutes;
