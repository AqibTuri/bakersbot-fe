import ArrowForwardIosIcon from "@mui/icons-material/ArrowForwardIos";
import { Button, Card, CardContent } from "@mui/material";
import { useState } from "react";
import Logo from "../../assets/logo.svg";
import CustomInput from "../../components/CustomInput.jsx";
import DataServices from "../../features/DataServices.js";

const PostPurchase = () => {
  const [formData, setFormData] = useState({
    name: "",
    username: "",
    password: "",
    email: "",
    instagram_username: "",
    created_date: new Date().toISOString(),
    token: "",
  });

  const createAccount = async () => {
    const { data } = await DataServices.signup(formData);
  };

  return (
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
            Please fill in the information below, and your username and password
            will be generated for you.{" "}
          </h4>
          <h4>
            Remember your username and password! You won’t be able to access
            Baker’s Bot without them. Please write them down or take a picture.
          </h4>
          <div className="flex gap-2">
            <CustomInput
              value={formData.name}
              onInput={(e) =>
                setFormData({ ...formData, name: e.target.value })
              }
              label="Your Name"
              placeholder="Enter Your Name"
            />
            <CustomInput
              value={formData.instagram_username}
              onInput={(e) =>
                setFormData({ ...formData, instagram_username: e.target.value })
              }
              label="Instagram Username"
            />
          </div>
          <CustomInput
            value={formData.email}
            onInput={(e) => setFormData({ ...formData, email: e.target.value })}
            placeholder="Enter Your Email"
            type="email"
            label="Email Address"
          />
          <div className="flex gap-2">
            <CustomInput
              value={formData.username}
              onInput={(e) =>
                setFormData({ ...formData, username: e.target.value })
              }
              label="Username"
            />
            <CustomInput
              value={formData.password}
              onInput={(e) =>
                setFormData({ ...formData, password: e.target.value })
              }
              type="password"
              label="Password"
            />
          </div>
          <Button
            endIcon={<ArrowForwardIosIcon />}
            onClick={createAccount}
            className="w-fit !p-4"
          >
            CREATE ACCOUNT
          </Button>
        </div>
      </CardContent>
    </Card>
  );
};

export default PostPurchase;
