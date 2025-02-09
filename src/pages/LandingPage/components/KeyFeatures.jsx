import { Divider } from "@mui/material";
import SnipeAutomatic from "../../../assets/snipeAutomatic.svg";
import ListAutomatic from "../../../assets/listAuto.svg";
import FutbinIntegration from "../../../assets/futbinInt.svg";
import HumanLikeSvg from "../../../assets/humanLikeInt.svg"; //
import MultiFilterSvg from "../../../assets/multiFilter.svg";
import SnipeByRatingSvg from "../../../assets/snipeByRating.svg";
import AutoRaritySvg from "../../../assets/autoRarity.svg";
import SnipePriceCalc from "../../../assets/snipePriceCalc.svg";
import ProfitCalcSvg from "../../../assets/profitCalc.svg";
import SafeSnipeSvg from "../../../assets/safeSnipping.svg";
import VideoTutorialSvg from "../../../assets/videoTutorial.svg";
import OneTimePurchase from "../../../assets/timePurchase.svg";

const features = [
  {
    title: "Snipe Automatically",
    description: "Snipe players faster than any human",
    icon: SnipeAutomatic,
  },
  {
    title: "List Automatically",
    description: "List players automatically on the market after being sniped.",
    icon: ListAutomatic,
  },
  {
    title: "Futbin Integration",
    description: "Get prices from Futbin directly into the Web App.",
    icon: FutbinIntegration,
  },
  {
    title: "Human-Like Algorithm",
    description: "Special algorithm emulating human behavior to protect you.",
    icon: HumanLikeSvg,
  },
  {
    title: "Multi-Filter Search",
    description: "Apply multiple filters at once to increase your profit.",
    icon: MultiFilterSvg,
  },
  {
    title: "Snipe by Rating",
    description: "Snipe players based on the rating you provide.",
    icon: SnipeByRatingSvg,
  },
  {
    title: "Auto Rarity Filler",
    description: "Automatically fills in player rarity based on your settings.",
    icon: AutoRaritySvg,
  },
  {
    title: "Snipe Price Calculator",
    description: "Calculates and sets the best sniping price for you.",
    icon: SnipePriceCalc,
  },
  {
    title: "Profit Calculator",
    description: "Know exactly how much profit you’re making in real time.",
    icon: ProfitCalcSvg,
  },
  {
    title: "Safe Sniping",
    description: "Features designed to protect you from losing coins.",
    icon: SafeSnipeSvg,
  },
  {
    title: "Video Tutorials",
    description: "Everything you need to get comfortable with the bot.",
    icon: VideoTutorialSvg,
  },
  {
    title: "One Time Purchase",
    description: "Purchase once get 365 days of access even if the next game.",
    icon: OneTimePurchase,
  },
];

const KeyFeatures = () => {
  return (
    <div className="flex flex-col max-w-7xl items-center w-full gap-5">
      <h1 className="uppercase text-2xl font-bold">
        Our <span className="text-primary">Key Features</span>
      </h1>
      <h2>
        Baker’s Bot is
        <span className="text-primary"> loaded with powerful features</span>,
        and we’re always adding more. Here are a few{" "}
        <span className="text-primary"> that make us stand out</span>.
      </h2>
      <div className="grid grid-cols-4 gap-4 w-full">
        {features.map((feature) => (
          <div className="flex flex-col items-center gap-4 p-4 w-[15rem] text-center bg-black rounded-[8px]">
            <img src={feature.icon} alt={feature.title} />
            <Divider className="h-1 bg-white w-50 rounded-[5px]" />
            <h2 className="text-lg">{feature.title}</h2>
            <span>{feature.description}</span>
          </div>
        ))}
      </div>
    </div>
  );
};

export default KeyFeatures;
