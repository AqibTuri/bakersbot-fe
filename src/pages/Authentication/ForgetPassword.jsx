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

const ForgetPassword = () => {
  const [formData, setFormData] = useState({
    email: "",
    otp: "",
    newPassword: "",
    confirmPassword: "",
  });
  const props = useData();
  const { user, setUser } = props;
  const navigate = useNavigate();
  const [step, setStep] = useState("EMAIL");

  const handleEmailSubmit = async () => {
    const { data } =
      (await DataServices.userForgot({
        email: formData.email,
      })) ?? {};
    setStep("OTP");
  };

  const handleOTPSubmit = async () => {
    const { data } =
      (await DataServices.validateOtp({
        email: formData.email,
        otp: formData.otp,
      })) ?? {};
    setStep("PASSWORD");
  };

  const handleResetSubmit = async () => {
    if (formData.newPassword !== formData.confirmPassword) {
      alert("Passwords do not match");
      return;
    }
    const { data } =
      (await DataServices.resetPassword({
        email: formData.email,
        password: formData.newPassword,
      })) ?? {};
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
            <span className="text-center">
              This page allows you to reset your password using an OTP sent to
              your email. Please follow the steps to securely change your
              password.
            </span>
          </div>
          <h1 className="w-full text-center text-2xl text-bold">
            Forget Password
          </h1>
          <FormGroup className="flex flex-col gap-2 w-xs">
            <InputLabel htmlFor="username" className="!text-white">
              Email
            </InputLabel>
            <OutlinedInput
              id="email"
              placeholder="Enter your email"
              value={formData.email}
              onChange={(e) =>
                setFormData({ ...formData, email: e.target.value })
              }
              classes={{
                input:
                  "bg-gray-800 !text-white !border-grey-400 rounded-[8px] !border-2",
              }}
            />
          </FormGroup>
          {step === "OTP" && (
            <FormGroup className="flex flex-col gap-2 w-xs">
              <InputLabel htmlFor="otp" className="!text-white">
                OTP
              </InputLabel>
              <OutlinedInput
                id="otp"
                placeholder="OTP"
                value={formData.otp}
                onChange={(e) =>
                  setFormData({ ...formData, otp: e.target.value })
                }
                classes={{
                  input:
                    "bg-gray-800 !text-white !border-grey-400 rounded-[8px] !border-2",
                }}
              />
            </FormGroup>
          )}
          {step === "PASSWORD" && (
            <>
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
            </>
          )}

          <Button
            className="w-xs !py-3"
            onClick={() => {
              if (step === "EMAIL") {
                handleEmailSubmit();
              } else if (step === "OTP") {
                handleOTPSubmit();
              } else {
                handleResetSubmit();
              }
            }}
          >
            {step === "EMAIL"
              ? "Send OTP"
              : step === "OTP"
                ? "Verify OTP"
                : "Reset Password"}
          </Button>
        </CardContent>
        <CardActions className="flex flex-col gap-5">
          <Link to="/login">Redirect to login?</Link>
        </CardActions>
      </Card>
    </div>
  );
};

export default ForgetPassword;
