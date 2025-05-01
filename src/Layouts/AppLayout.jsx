import {
  DashboardOutlined,
  LockOutlined,
  LogoutOutlined,
  Star,
} from "@mui/icons-material";
import { Button, Chip } from "@mui/material";
import { useState } from "react";
import { Link, useLocation } from "react-router-dom";
import { useData } from "../features/Context.jsx";

const MENU_DATA = [
  { icon: <DashboardOutlined />, label: "Dashboard", path: "/dashboard" },
  {
    icon: <LockOutlined />,
    label: "Change Password",
    path: "/change-password",
  },
  {
    icon: <Star className="w-4 h-4" />,
    label: "Leave A Review",
    path: "/review",
  },
];

export default function AppLayout({ children }) {
  const { user, setUser } = useData();
  const { pathname } = useLocation();

  const activeItemTitle = MENU_DATA.find(
    (item, index) => pathname === item.path,
  )?.label;

  const handleLogout = () => {
    setUser(null);
  };

  return (
    <div className="flex h-screen">
      {/* Main container with dark gradient background */}
      <div className="w-full mx-auto overflow-hidden bg-gradient-to-b from-gray-900 to-black ">
        <div className="flex flex-col md:flex-row h-full">
          {/* Left sidebar */}
          <div className="w-full md:w-64 bg-black/50 p-4 flex flex-col">
            {/* User profile section */}
            <div className="flex flex-col items-center mb-6 mt-4">
              <div className="relative">
                <div className="w-24 h-24 rounded-full overflow-hidden border-2 border-orange-500">
                  <img
                    src="src/assets/Dashboard/profilePic.png"
                    alt="User avatar"
                    className="w-full h-full object-cover bg-gray-800"
                  />
                </div>
                <Chip
                  label={
                    <div className="flex gap-2">
                      <Dot color={user.valid ? "bg-green-500" : "bg-red-500"} />
                      <span>{user.valid ? "Active" : "In-active"}</span>
                    </div>
                  }
                  className="absolute bottom-[-10px] right-[10%] !bg-[#031D0E] !text-white"
                />
              </div>
            </div>

            {/* User info */}
            <div className="text-center mb-6">
              <p className="text-gray-400 text-xs">Username:</p>
              <p className="text-orange-500 font-bold">{user.name}</p>
              <div className="mt-3">
                <p className="text-gray-400 text-xs">Membership Valid Until</p>
                <p className="text-white text-sm">Dec 31, 2025</p>
              </div>
            </div>

            {/* Renew button */}
            <div className="flex justify-center">
              <Button className="w-fit">RENEW MEMBERSHIP</Button>
            </div>

            <div className="my-6 w-full h-[.5px] !bg-gray-500" />

            {/* Navigation menu */}
            <div className="flex-1 flex flex-col gap-2">
              {MENU_DATA.map((item, index) => (
                <Link to={item.path}>
                  <div
                    key={index}
                    className={`${activeItemTitle === item.label ? "bg-gradient-to-r from-orange-700 to-orange-900 text-white" : "text-gray-400 hover:bg-gray-800 "}flex items-center gap-3 p-3 rounded-md transition-colors`}
                  >
                    {item.icon}
                    <span>{item.label}</span>
                  </div>
                </Link>
              ))}
            </div>

            {/* Logout button */}
            <Button startIcon={<LogoutOutlined />} onClick={handleLogout}>
              LOG OUT
            </Button>
          </div>

          {/* Main content area */}
          <div className="flex-1 p-6 overflow-auto bg-[#02050E80] px-16 flex flex-col items-center">
            {children}
          </div>
        </div>
      </div>
    </div>
  );
}

const Dot = ({ color = "bg-green-500" }) => (
  <div className={`${color} w-4 h-4 rounded-full border-2 border-black`}></div>
);
