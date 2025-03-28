import { CheckBox } from "@mui/icons-material";
import ArrowForwardIosIcon from "@mui/icons-material/ArrowForwardIos";
import { Button, Card, CardContent } from "@mui/material";
import Logo from "../../assets/logo.svg";
import CustomInput from "../../components/CustomInput.jsx";
import Navbar from "../../components/Navbar.jsx";
import Footer from "../../components/Footer.jsx";

const PostPurchase = () => {
  return (
    <div className="max-w-full flex flex-col gap-10 justify-center items-center">
      <Navbar />
      <Card className="max-w-7xl w-full !bg-transparent">
        <CardContent className="flex w-full flex-col md:flex-row gap-4 bg-black !p-0">
          <img
            className="md:w-[40%] w-full"
            src="src/assets/PostPurchase/image.png"
            alt="Pre Purchase"
          />
          <div className="md:w-[60%] w-full flex flex-col gap-5 text-white p-5  justify-between ">
            <div className="flex gap-4 shrink-0 items-center">
              <img className="h-8 w-auto" src={Logo} alt="Your Company" />
              <span>BAKER'S BOT</span>
            </div>
            <h2 className="text-lg uppercase font-bold">
              Thank you for your purchase!
            </h2>
            <h2 className="text-lg uppercase font-bold">
              Let’s get started by creating your Baker’s Bot account.
            </h2>
            <h4>
              Please fill in the information below, and your username and
              password will be generated for you.{" "}
            </h4>
            <h4>
              Remember your username and password! You won’t be able to access
              Baker’s Bot without them. Please write them down or take a
              picture.
            </h4>
            <div className="flex gap-2">
              <CustomInput label="Your Name" placeholder="Enter Your Name" />
              <CustomInput label="Instagram Username" />
            </div>
            <CustomInput label="Email Address" />
            <div className="flex gap-2">
              <CustomInput label="Username" />
              <CustomInput label="Password" />
            </div>
            <Button endIcon={<ArrowForwardIosIcon />} className="w-fit !p-4">
              CREATE ACCOUNT
            </Button>
          </div>
        </CardContent>
      </Card>
      <Footer />
    </div>
  );
};

export default PostPurchase;
