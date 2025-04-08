import {
  ArrowBackIosNew,
  DashboardOutlined,
  LockOutlined,
  LogoutOutlined,
  Star,
} from "@mui/icons-material";
import ArrowForwardIosIcon from "@mui/icons-material/ArrowForwardIos";
import { Button, Chip } from "@mui/material";

export default function Dashboard() {
  return (
    <div className="flex h-screen bg-black">
      {/* Main container with dark gradient background */}
      <div className="w-full max-w-6xl mx-auto my-4 rounded-3xl overflow-hidden bg-gradient-to-b from-gray-900 to-black border border-gray-800">
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
                      <Dot />
                      <span>Active</span>
                    </div>
                  }
                  className="absolute bottom-[-10px] right-[10%] !bg-[#031D0E] !text-white"
                />
              </div>
            </div>

            {/* User info */}
            <div className="text-center mb-6">
              <p className="text-gray-400 text-xs">Username:</p>
              <p className="text-orange-500 font-bold">Tester</p>
              <div className="mt-3">
                <p className="text-gray-400 text-xs">Membership Valid Until</p>
                <p className="text-white text-sm">Dec 31, 2024</p>
              </div>
            </div>

            {/* Renew button */}
            <Button className="w-fit">RENEW MEMBERSHIP</Button>

            <div className="my-6 w-full h-[.5px] !bg-gray-500" />

            {/* Navigation menu */}
            <div className="flex-1 flex flex-col gap-2">
              <div className="flex items-center gap-3 bg-gradient-to-r from-orange-700 to-orange-900 p-3 rounded-md text-white">
                <DashboardOutlined />
                <span>Dashboard</span>
              </div>

              <div className="flex items-center gap-3 p-3 text-gray-400 hover:bg-gray-800 rounded-md transition-colors">
                <LockOutlined />
                <span>Change Password</span>
              </div>

              <div className="flex items-center gap-3 p-3 text-gray-400 hover:bg-gray-800 rounded-md transition-colors">
                <Star className="w-4 h-4" />
                <span>Leave A Review</span>
              </div>
            </div>

            {/* Logout button */}
            <Button startIcon={<LogoutOutlined />}>LOG OUT</Button>
          </div>

          {/* Main content area */}
          <div className="flex-1 p-6 overflow-auto bg-[#02050E80]">
            <div className="my-8">
              <h2 className="text-white text-lg font-bold mb-2">
                TO BEGIN USING THE BOT, PLEASE CLICK{" "}
                <span className="text-primary">DOWNLOAD</span> BELOW AND FOLLOW
                THE VIDEO TUTORIAL PROVIDED.
              </h2>

              <p className="text-gray-400 text-sm mb-4">
                The video covers every step in detail and is very clear. If you
                are stuck, please re-watch the video carefully. It is most
                likely you are missing a simple mistake. We have thousands of
                customers, and trust us, everything you need is in this video!
                Give it another watch if you're feeling confused. If you still
                need help, feel free to message us on Instagram: Bakers.bot
              </p>

              <Button endIcon={<ArrowForwardIosIcon />} className="w-fit">
                Download Extension
              </Button>
            </div>

            <div className="mb-4 flex gap-5 flex-col">
              <h3 className="text-white text-center text-lg font-bold">
                Baker's Bot{" "}
                <span className="text-orange-500">Setup Tutorial</span>
              </h3>

              {/* Tutorial carousel */}
              <div className="relative">
                <img
                  src="src/assets/dashboard/image.png"
                  alt="Soccer player"
                  className="w-full h-full object-cover"
                />

                {/* Carousel navigation */}
                <button className="absolute left-2 top-1/2 transform -translate-y-1/2 w-8 h-8 bg-primary rounded-full flex items-center justify-center text-white">
                  <ArrowBackIosNew width={2} />
                </button>
                <button className="absolute right-2 top-1/2 transform -translate-y-1/2 w-8 h-8 bg-primary rounded-full flex items-center justify-center text-white">
                  <ArrowForwardIosIcon width={2} />
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

const Dot = () => (
  <div className="bg-green-500 w-4 h-4 rounded-full border-2 border-black"></div>
);
