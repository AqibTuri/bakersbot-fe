import ArrowForwardIosIcon from "@mui/icons-material/ArrowForwardIos";
import { Button, Divider } from "@mui/material";
import { useState } from "react";

const features = [
  {
    title: "The fastest bot on the market",
    icon: "src/assets/fastbot.gif",
    description:
      "Outperform every competitor with unmatched performance. Snipe players faster than anyone.",
  },
  {
    title: "Easy to use",
    icon: "src/assets/easyuse.gif",
    description:
      "Our tutorial video will have you set up and sniping in less than 5 minutes!",
  },
  {
    title: "Leave the Work to Us",
    description:
      "Our algorithm is powerful. Just pick a player to snipe, and let Baker's Bot handle the rest.",
    icon: "src/assets/leavework.gif",
  },
  {
    title: "Simplicity at Its Finest",
    icon: "src/assets/simplicity.gif",
    description:
      "You’ll be a sniping pro in minutes. No learning curve—just watch our tutorial videos and get results.",
  },
];

const Features = () => {
  const [activeIndex, setActiveIndex] = useState(0);

  return (
    <div className="flex flex-col items-center gap-4 w-full max-w-7xl">
      <h1 className="uppercase text-2xl font-bold">
        Everything You Need to Know About
        <span className="text-primary"> Baker's Bot</span>
      </h1>
      <div className="grid grid-cols-4 text-white w-full">
        {features.map((feature) => (
          <div className="flex flex-col items-center gap-2 p-4 w-[15rem] text-center bg-black rounded-[8px]">
            <img
              src={feature.icon}
              alt={feature.title}
              className="w-[10rem] h-[10rem]"
            />
            <Divider className="h-1 bg-white w-50 rounded-[5px]" />
            <h1 className="uppercase text-lg font-bold">{feature.title}</h1>
            <p>{feature.description}</p>
          </div>
        ))}
      </div>
      <Button endIcon={<ArrowForwardIosIcon />}>Purchase Now</Button>
    </div>
  );
};

export default Features;
