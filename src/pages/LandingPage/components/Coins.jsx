import CoinM from "../../../assets/coinM.svg";
import CoinB from "../../../assets/coinB.svg";
import Ground from "../../../assets/ground.svg";

const Coins = () => {
  return (
    <div className="flex flex-col md:flex-row gap-4 max-w-7xl items-center mb-[5rem]">
      <div className="flex flex-col gap-4 text-center md:text-start">
        <h1 className="uppercase text-2xl font-bold">
          It’s <span className="text-primary"> 1 million coins a month</span>
        </h1>
        <span>
          Think you might{" "}
          <span className="text-primary">struggle with sniping</span>? Let’s
          talk about the worst-case scenario: making 33K coins a day.{" "}
          <span className="text-primary">
            That’s 1 million coins in a month
          </span>
          —and that’s if you’re really struggling. With Baker’s Bot, even if
          you’re not great at sniping, the{" "}
          <span className="text-primary">bot makes it easy</span>. Most users
          start earning far more within just a few days, and as you get more
          familiar, your{" "}
          <span className="text-primary">results will only improve</span>. The
          real question isn’t if you’ll make coins, but
          <span className="text-primary">how fast and how many</span>.
        </span>
      </div>
      <div className="relative">
        <img src={CoinM} alt="CoinM" className="w-7xl" />
        <img
          src={Ground}
          alt="Ground"
          className="absolute w-[40rem] max-w-[40rem] right-[90%] top-[80%]"
        />
        <img
          src={CoinB}
          alt="CoinB"
          className="absolute top-[50%] right-[50%]"
        />
      </div>
    </div>
  );
};

export default Coins;
