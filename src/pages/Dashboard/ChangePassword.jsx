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

const ChangePassword = () => {
  const [formData, setFormData] = useState({
    currentPassword: "",
    newPassword: "",
    confirmPassword: "",
  });
  const props = useData();
  const { user, setUser } = props;
  const navigate = useNavigate();
  const [step, setStep] = useState("EMAIL");

  const handleResetSubmit = async () => {
    if (formData.newPassword !== formData.confirmPassword) {
      alert("Passwords do not match");
      return;
    }
    const { data } =
      (await DataServices.changePassword({
        id: user?._id,
        old_password: formData.currentPassword,
        password: formData.newPassword,
        confirm_password: formData.confirmPassword,
      })) ?? {};
    if (data?.status === "success") {
      navigate("/login");
    }
  };

  return (
    <div className="max-w-7xl flex mx-auto justify-between items-center flex-col py-5 relative">
      <Card className="w-md p-5 !bg-black !text-white !pb-10">
        <CardContent className="flex flex-col gap-5 items-center">
          <h1 className="w-full text-center text-2xl text-bold">
            Change Password
          </h1>
          <FormGroup className="flex flex-col gap-2 w-xs">
            <InputLabel htmlFor="currentPassword" className="!text-white">
              Current Password
            </InputLabel>
            <OutlinedInput
              id="currentPassword"
              type="password"
              placeholder=""
              value={formData.currentPassword}
              onChange={(e) =>
                setFormData({
                  ...formData,
                  currentPassword: e.target.value,
                })
              }
              classes={{
                input:
                  "bg-gray-800 !text-white !border-grey-400 rounded-[8px] !border-2",
              }}
            />
          </FormGroup>

          <FormGroup className="flex flex-col gap-2 w-xs">
            <InputLabel htmlFor="newPassword" className="!text-white">
              New Password
            </InputLabel>
            <OutlinedInput
              id="newPassword"
              type="password"
              placeholder="Enter your new password"
              value={formData.newPassword}
              onChange={(e) =>
                setFormData({ ...formData, newPassword: e.target.value })
              }
              classes={{
                input:
                  "bg-gray-800 !text-white !border-grey-400 rounded-[8px] !border-2",
              }}
            />
          </FormGroup>
          <FormGroup className="flex flex-col gap-2 w-xs">
            <InputLabel htmlFor="confirmPassword" className="!text-white">
              Confirm Password
            </InputLabel>
            <OutlinedInput
              id="confirmPassword"
              type="password"
              placeholder="Confirm your new password"
              value={formData.confirmPassword}
              onChange={(e) =>
                setFormData({
                  ...formData,
                  confirmPassword: e.target.value,
                })
              }
              classes={{
                input:
                  "bg-gray-800 !text-white !border-grey-400 rounded-[8px] !border-2",
              }}
            />
          </FormGroup>

          <Button className="w-xs !py-3" onClick={() => handleResetSubmit()}>
            Change Password
          </Button>
        </CardContent>
      </Card>
    </div>
  );
};

export default ChangePassword;
