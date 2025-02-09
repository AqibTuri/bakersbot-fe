import PopularPng from "../../../assets/popularPng.png";

const PopularSection = () => {
  return (
    <div className="flex flex-col md:flex-row gap-4 max-w-7xl items-center">
      <img src={PopularPng} className="max-w-md" alt="Popular" />
      <div className="flex flex-col gap-4 text-center md:text-start">
        <h1 className="uppercase text-2xl font-bold">
          The Most <span className="text-primary"> Popular Sniping Bot</span>{" "}
          And There’s a Reason for It
        </h1>
        <span>
          There’s a reason why we’re the most popular. At Baker’s Bot, we{" "}
          <span className="text-primary"> don’t just offer a tool</span>—we
          offer a commitment to your{" "}
          <span className="text-primary"> success and satisfaction</span>. We
          care about making your Ultimate Team experience the best it can be.{" "}
          <span className="text-primary"> Your success is our priority</span>,
          and we’re committed to making sure you get the experience you deserve.
        </span>
      </div>
    </div>
  );
};

export default PopularSection;
