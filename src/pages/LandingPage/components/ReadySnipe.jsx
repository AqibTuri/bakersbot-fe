import ArrowForwardIosIcon from "@mui/icons-material/ArrowForwardIos";
import { Button } from "@mui/material";
import { useNavigate } from "react-router-dom";
import ReadySnipeSvg from "../../../assets/readySnipe.svg";

const ReadySnipe = () => {
  const navigate = useNavigate();

  return (
    <div className="flex flex-col md:flex-row gap-5 bg-black p-10 border-primary border-2 rounded-[8px] items-center max-w-7xl">
      <img src={ReadySnipeSvg} alt="Intro" className="w-lg" />

      <div className="flex flex-col gap-5 text-center md:text-start">
        <h1 className="text-2xl text-bold">Ready to Join the Family?</h1>
        <span>
          Purchase Baker’s Bot today and{" "}
          <span className="text-primary">enjoy 365 days of access</span>—even if
          that means your{" "}
          <span className="text-primary">usage goes into the next game.</span>
        </span>
        <span>£25.50</span>
        <div className="flex gap-5 justify-center md:justify-start">
          <Button
            endIcon={<ArrowForwardIosIcon />}
            onClick={() => navigate("/pre-purchase")}
          >
            Buy Now
          </Button>
          <Button
            variant="outlined"
            onClick={() => navigate("/faqs")}
            endIcon={<ArrowForwardIosIcon />}
            className="!bg-transparent !border-primary"
          >
            Checkout Faqs
          </Button>
        </div>
      </div>
    </div>
  );
};

export default ReadySnipe;
