import { ArrowBackIosNew } from "@mui/icons-material";
import ArrowForwardIosIcon from "@mui/icons-material/ArrowForwardIos";
import { Button } from "@mui/material";
import { useState } from "react";
import { useData } from "../../features/Context.jsx";

const VIDEOS = [
  {
    title: "Setup Tutorial",
    url: `${import.meta.env.VITE_VIDEO_SERVER}video/setup`,
  },
  {
    title: "Usage Tutorial",
    url: `${import.meta.env.VITE_VIDEO_SERVER}video/use`,
  },
  {
    title: "Snipe Tutorial",
    url: `${import.meta.env.VITE_VIDEO_SERVER}video/snipe`,
  },
];

export default function Dashboard() {
  const [index, setIndex] = useState(0);
  const { setUser } = useData();

  return (
    <>
      <div className="my-8 flex flex-col items-center gap-5">
        <h2 className="text-white text-lg font-bold mb-2">
          TO BEGIN USING THE BOT, PLEASE CLICK{" "}
          <span className="text-primary">DOWNLOAD</span> BELOW AND FOLLOW THE
          VIDEO TUTORIAL PROVIDED.
        </h2>

        <p className="text-gray-400 text-sm mb-4">
          The video covers every step in detail and is very clear. If you are
          stuck, please re-watch the video carefully. It is most likely you are
          missing a simple mistake. We have thousands of customers, and trust
          us, everything you need is in this video! Give it another watch if
          you're feeling confused. If you still need help, feel free to message
          us on Instagram: Bakers.bot
        </p>

        <Button endIcon={<ArrowForwardIosIcon />} className="w-fit">
          Download Extension
        </Button>
      </div>

      <div className="mb-4 flex gap-5 flex-col max-w-3xl">
        <h3 className="text-white text-center text-lg font-bold">
          Baker's Bot{" "}
          <span className="text-orange-500">{VIDEOS[index].title}</span>
        </h3>

        {/* Tutorial carousel */}
        <div className="relative">
          <video
            className="rounded-lg"
            controls
            src={VIDEOS[index].url}
            controlsList="nodownload"
            playsInline
          />

          {/* Carousel navigation */}
          <button
            className={`absolute left-2 top-1/2 transform -translate-y-1/2 w-8 h-8 bg-primary rounded-full flex items-center justify-center text-white ${index <= 0 ? "hidden" : ""}`}
          >
            <ArrowBackIosNew
              width={2}
              onClick={() => setIndex((prev) => prev - 1)}
            />
          </button>
          <button
            className={`absolute right-2 top-1/2 transform -translate-y-1/2 w-8 h-8 bg-primary rounded-full flex items-center justify-center text-white ${index >= 2 ? "hidden" : ""}`}
          >
            <ArrowForwardIosIcon
              width={2}
              onClick={() => setIndex((prev) => prev + 1)}
            />
          </button>
        </div>
      </div>
    </>
  );
}
