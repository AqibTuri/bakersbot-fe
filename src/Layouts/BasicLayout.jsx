import Footer from "../components/Footer.jsx";
import Navbar from "../components/Navbar.jsx";

const BasicLayout = ({ children }) => {
  return (
    <div className="max-w-full flex flex-col gap-10 justify-center items-center">
      <Navbar />
      <main>{children}</main>
      <Footer />
    </div>
  );
};

export default BasicLayout;
