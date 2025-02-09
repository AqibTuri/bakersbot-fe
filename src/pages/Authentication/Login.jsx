import {
  Button,
  Card,
  CardActionArea,
  CardActions,
  CardContent,
  CardHeader,
  FormGroup,
  Input,
  InputLabel,
  OutlinedInput,
} from "@mui/material";
import { Link } from "react-router-dom";
import Logo from "../../assets/logo.svg";
import Footer from "../../components/Footer.jsx";
import Navbar from "../../components/Navbar.jsx";

const Login = () => {
  return (
    <>
      <div className="absolute w-full">
        <Navbar />
      </div>
      <div className="max-w-7xl flex mx-auto justify-between pt-50 items-center flex-col h-screen py-5 relative">
        <Card className="w-2xl p-5 !bg-black !text-white !pb-10">
          <CardContent className="flex flex-col gap-5 items-center">
            <div className="flex flex-col items-center gap-5">
              <div className="flex items-center gap-5">
                <img src={Logo} alt="Logo" />
                <span>BAKER'S BOT</span>
              </div>
              <span className="text-center">
                This login page is for customers who have purchased Baker's Bot.
                If you're not a customer yet, login access is provided upon
                purchase completion.
              </span>
            </div>
            <h1 className="w-full text-center text-2xl text-bold">Login</h1>
            <FormGroup className="flex flex-col gap-2 w-xs">
              <InputLabel htmlFor="username" className="!text-white">
                Username
              </InputLabel>
              <OutlinedInput
                id="username"
                placeholder="Enter your username"
                classes={{
                  input:
                    "bg-gray-800 !text-white !border-grey-400 rounded-[8px] !border-2",
                }}
              />
            </FormGroup>
            <FormGroup className="flex flex-col gap-2 w-xs">
              <InputLabel htmlFor="password" className="!text-white">
                Password
              </InputLabel>
              <OutlinedInput
                id="password"
                placeholder="Enter your password"
                classes={{
                  input:
                    "bg-gray-800 !text-white !border-grey-400 rounded-[8px] !border-2",
                }}
              />
            </FormGroup>
            <Button className="w-xs !py-3">Login</Button>
          </CardContent>
          <CardActions className="flex flex-col gap-5">
            <Link to="/register">Forgot Password?</Link>
            <Link to="/register">Forgot Username?</Link>
          </CardActions>
        </Card>
        <Footer />
      </div>
    </>
  );
};

export default Login;
