import { Button } from "@mui/material";
import ArrowForwardIosIcon from "@mui/icons-material/ArrowForwardIos";
import IntroSectionSvg from "../../../assets/introSection.svg";

const IntroSection = () => {
  return (
    <div className="flex flex-col sm:flex-row items-center max-w-7xl">
      <div className="flex flex-col gap-4">
        <h1 className="uppercase text-2xl font-bold">
          You'll
          <span className="text-primary"> Make a Million</span> Coins, But
          That's Just the Beginning.
        </h1>
        <span>
          Tired of seeing those insane teams?{" "}
          <span className="text-primary"> Tired of your pack luck?</span> Tired
          of relying on the game? Want Mbappe on your team? With Baker's Bot,
          you take control. <span className="text-primary"> Start earning</span>
          what you deserve.
          <span className="text-primary"> Join the family today.</span>
        </span>
        <div className="flex gap-4">
          <Button endIcon={<ArrowForwardIosIcon />}>Purchase Now</Button>
          <Button endIcon={<ArrowForwardIosIcon />}>Why Choose Us</Button>
        </div>
      </div>
      <img src={IntroSectionSvg} className="max-w-md" alt="Intro" />
    </div>
  );
};

export default IntroSection;
