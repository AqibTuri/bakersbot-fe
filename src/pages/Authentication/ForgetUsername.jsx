import {
  Button,
  Card,
  CardActions,
  CardContent,
  FormGroup,
  InputLabel,
  OutlinedInput,
} from "@mui/material";
import { useEffect, useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import Logo from "../../assets/logo.svg";
import { useData } from "../../features/Context.jsx";
import DataServices from "../../features/DataServices.js";

const ForgetUsername = () => {
  const [formData, setFormData] = useState({
    email: "",
  });
  const props = useData();
  const { user, setUser } = props;
  const navigate = useNavigate();

  const handleSubmit = async () => {
    const { data } = (await DataServices.sendUsername(formData)) ?? {};
    if (data?.status === "success") {
      navigate("/login");
    }
  };

  useEffect(() => {
    if (user) {
      navigate("/dashboard");
    }
  }, [user]);

  return (
    <div className="max-w-7xl flex mx-auto justify-between items-center flex-col py-5 relative">
      <Card className="w-md p-5 !bg-black !text-white !pb-10">
        <CardContent className="flex flex-col gap-5 items-center">
          <div className="flex flex-col items-center gap-5">
            <div className="flex items-center gap-5">
              <img src={Logo} alt="Logo" />
              <span>BAKER'S BOT</span>
            </div>
            <span className="text-center ">
              Email will be sent to the registered email address with your
              username. If you have not registered your email address, please
              contact support.
            </span>
          </div>
          <h1 className="w-full text-center text-2xl text-bold">
            Forget Username
          </h1>
          <FormGroup className="flex flex-col gap-2 w-xs">
            <InputLabel htmlFor="email" className="!text-white">
              Email
            </InputLabel>
            <OutlinedInput
              id="email"
              placeholder="Enter your email"
              type="email"
              value={formData.email}
              onChange={(e) => setFormData({ email: e.target.value })}
              classes={{
                input:
                  "bg-gray-800 !text-white !border-grey-400 rounded-[8px] !border-2",
              }}
            />
          </FormGroup>
          <Button className="w-xs !py-3" onClick={handleSubmit}>
            Send Username
          </Button>
        </CardContent>
        <CardActions className="flex flex-col gap-5">
          <Link to="/login">Redirect to login?</Link>
        </CardActions>
      </Card>
    </div>
  );
};

export default ForgetUsername;
