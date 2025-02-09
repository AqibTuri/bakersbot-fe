import Logo from "../assets/logo.svg";

const Navbar = () => (
  <nav className="bg-none w-full">
    <div className="px-2 sm:px-6 lg:px-20">
      <div className="relative flex h-16 items-center justify-between">
        <div className="flex gap-4 shrink-0 items-center">
          <img className="h-8 w-auto" src={Logo} alt="Your Company" />
          <span>BAKER'S BOT</span>
        </div>
        <div className="">
          <div className="flex space-x-4">
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
            <a
              href="#"
              className="rounded-md bg-primary px-5 py-2 text-sm font-medium text-white"
              aria-current="page"
            >
              Login
            </a>
          </div>
        </div>
      </div>
    </div>
  </nav>
);

export default Navbar;
