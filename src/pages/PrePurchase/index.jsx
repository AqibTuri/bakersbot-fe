import { CheckBox } from "@mui/icons-material";
import ArrowForwardIosIcon from "@mui/icons-material/ArrowForwardIos";
import { Button, Card, CardContent } from "@mui/material";
import Logo from "../../assets/logo.svg";
import Navbar from "../../components/Navbar.jsx";
import Footer from "../../components/Footer.jsx";

const PrePurchase = () => {
  return (
    <Card className="max-w-7xl w-full !bg-transparent">
      <CardContent className="flex w-full flex-col md:flex-row gap-4 bg-black !p-0">
        <img
          className="md:w-[40%] w-full"
          src="src/assets/PrePurchase/image.png"
          alt="Pre Purchase"
        />
        <div className="md:w-[60%] w-full flex flex-col gap-5 text-white p-5  justify-between ">
          <div className="flex gap-4 shrink-0 items-center">
            <img className="h-8 w-auto" src={Logo} alt="Your Company" />
            <span>BAKER'S BOT</span>
          </div>
          <h2 className="text-lg uppercase font-bold">
            You're one click away from transforming your Ultimate Team
            experience.
          </h2>
          <h4>
            Purchasing today gives you 365 days of access to the bot—even if
            that means your usage extends into the next game.
          </h4>
          <h4>
            Before you complete your purchase, please take a moment to read
            through our{" "}
            <span className="text-primary">[Terms and Conditions]</span>.
          </h4>
          <h4>
            We really appreciate your business and we know you'll love the
            product. Welcome to the family!
          </h4>
          <span className="text-primary">
            100% secure checkout powered by Stripe.
          </span>
          <div>
            <CheckBox />
            <span>
              I have read and agree to the{" "}
              <span className="text-primary">Terms and Conditions</span>.
            </span>
          </div>
          <Button endIcon={<ArrowForwardIosIcon />} className="w-fit !p-4">
            GO TO CHECKOUT
          </Button>
        </div>
      </CardContent>
    </Card>
  );
};

export default PrePurchase;
