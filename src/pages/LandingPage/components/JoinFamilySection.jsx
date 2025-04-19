import ArrowForwardIosIcon from "@mui/icons-material/ArrowForwardIos";
import { Button } from "@mui/material";
import { useNavigate } from "react-router-dom";
import JoinFamilySvg from "../../../assets/JoinFamily.svg";
const JoinFamilySection = () => {
  const navigate = useNavigate();
  return (
    <div className="flex flex-col md:flex-row gap-4 items-center max-w-7xl">
      <div className="flex flex-col gap-4 text-center md:text-start">
        <h1 className="uppercase text-2xl font-bold">
          <span className="text-primary">Join the Family</span> Your Success is
          Our Success
        </h1>
        <span>
          At Baker’s Bot,
          <span className="text-primary">you’re not just buying a tool</span>
          —you’re joining a community. We’re dedicated to your success because
          <span className="text-primary">when you succeed, we succeed</span>.
          Our support team is here for you every step of the way and is always
          just a message away,
          <span className="text-primary">ready to help with anything</span> you
          need. Together,{" "}
          <span className="text-primary">we’re building something bigger</span>.
        </span>
        <div className="flex gap-4 items-center justify-center md:justify-start">
          <Button
            endIcon={<ArrowForwardIosIcon />}
            onClick={() => navigate("/login")}
          >
            Join Now
          </Button>
          <Button endIcon={<ArrowForwardIosIcon />}>Read More</Button>
          <span>Still Not Convinced?</span>
        </div>
      </div>
      <img src={JoinFamilySvg} className="max-w-md" alt="Join Family" />
    </div>
  );
};

export default JoinFamilySection;
