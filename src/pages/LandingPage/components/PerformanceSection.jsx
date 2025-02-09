import PerformancePng from "../../../assets/performanceSection.png";
const PerformanceSection = () => {
  return (
    <div className="flex flex-col sm:flex-row items-center gap-5 max-w-7xl">
      <img src={PerformancePng} alt="Performance" className="max-w-xl" />
      <div>
        <h1 className="uppercase text-2xl font-bold">
          Unmatched <span className="text-primary"> Results</span>, Unbeatable{" "}
          <span className="text-primary">Performance</span>, and
          <span className="text-primary"> Effortless</span> to Use
        </h1>
        <span>
          Baker's Bot is designed to{" "}
          <span className="text-primary">
            transform your Ultimate Team experience
          </span>
          . Our goal is to help you earn coins faster than ever. In just a few
          clicks, your bot will be up and running. Let our{" "}
          <span className="text-primary">AI handle the hard work</span>—simply
          choose the player you want to snipe, and Baker’s Bot will do the rest.
          Our developers are always improving the tool, providing
          <span className="text-primary">upgrades at no extra cost</span>. Take
          advantage of{" "}
          <span className="text-primary">
            the people’s tool—built for you, by us
          </span>
          .
        </span>
      </div>
    </div>
  );
};

export default PerformanceSection;
