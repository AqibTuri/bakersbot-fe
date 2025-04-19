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

const layoutRoutes = [
  {
    path: "/",
    component: <LandingPage />,
  },
  {
    path: "/login",
    component: <Login />,
  },
  {
    path: "/pre-purchase",
    component: <PrePurchase />,
  },
  {
    path: "/post-purchase",
    component: <PostPurchase />,
  },
  {
    path: "/contact-us",
    component: <ContactUs />,
  },
  {
    path: "/faqs",
    component: <FAQPage />,
  },
  {
    path: "/terms-conditions",
    component: <TermsConditions />,
  },
  {
    path: "/privacy-policy",
    component: <PrivacyPolicy />,
  },
  {
    path: "/refund-policy",
    component: <RefundPolicy />,
  },
];

const AppRoutes = () => {
  return (
    <Routes>
      {layoutRoutes.map((route, index) => (
        <Route
          key={index}
          path={route.path}
          element={<BasicLayout>{route.component}</BasicLayout>}
        />
      ))}
      <Route
        path="/dashboard"
        element={
          <PrivateRoute>
            <Dashboard />
          </PrivateRoute>
        }
      />
    </Routes>
  );
};

export default AppRoutes;
