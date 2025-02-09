import { Divider } from "@mui/material";
import Logo from "../assets/logo.svg";

const Footer = () => {
  return (
    <footer className="bottom-0 flex max-w-7xl w-full items-center flex-col gap-5">
      <div className="flex items-center gap-5">
        <img src={Logo} alt="Logo" />
        <span>BAKER'S BOT</span>
      </div>
      <div className="flex gap-10">
        <a
          href="#"
          className="rounded-md px-3 py-2 text-sm font-medium text-gray-300 hover:bg-gray-700 hover:text-white"
        >
          Home
        </a>
        <a
          href="#"
          className="rounded-md px-3 py-2 text-sm font-medium text-gray-300 hover:bg-gray-700 hover:text-white"
        >
          Purchase
        </a>
        <a
          href="#"
          className="rounded-md px-3 py-2 text-sm font-medium text-gray-300 hover:bg-gray-700 hover:text-white"
        >
          FAQs
        </a>
        <a
          href="#"
          className="rounded-md px-3 py-2 text-sm font-medium text-gray-300 hover:bg-gray-700 hover:text-white"
        >
          Contact Us
        </a>
      </div>
      <Divider className="h-[.01rem] bg-gray-300 w-full" />
      <div className="grid grid-cols-2 w-full mb-5">
        <div className="flex">
          <span>Terms and Conditions | Privacy policy | Refund Policy</span>
        </div>
        <div className="flex flex-col items-end">
          <div>
            <span>© Baker's Bot 2024 | </span>
            <span>All Rights Reserved.</span>
          </div>
          <span>
            Don't see your payment method? Don't worry—we accept most major
            cards!
          </span>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
