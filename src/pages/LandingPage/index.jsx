import Navbar from "../../components/Navbar.jsx";
import Coins from "./components/Coins.jsx";
import Features from "./components/Features.jsx";
import Footer from "../../components/Footer.jsx";
import IntroSection from "./components/IntroSection.jsx";
import JoinFamilySection from "./components/JoinFamilySection.jsx";
import KeyFeatures from "./components/KeyFeatures.jsx";
import PerformanceSection from "./components/PerformanceSection.jsx";
import PopularSection from "./components/PopularSection.jsx";
import ReadySnipe from "./components/ReadySnipe.jsx";

const LandingPage = () => {
  return (
    <div className="max-w-full flex flex-col gap-10 justify-center items-center">
      <IntroSection />
      <Features />
      <PerformanceSection />
      <JoinFamilySection />
      <PopularSection />
      <Coins />
      <KeyFeatures />
      <ReadySnipe />
    </div>
  );
};

export default LandingPage;
