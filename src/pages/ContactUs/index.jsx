import ArrowForwardIosIcon from "@mui/icons-material/ArrowForwardIos";
import { Button } from "@mui/material";
import ArrowForwardIcon from "@mui/icons-material/ArrowForward";
import ReadySnipe from "../LandingPage/components/ReadySnipe.jsx";

export default function ContactUs() {
  return (
    <div className="min-h-screen text-white max-w-7xl px-20 flex flex-col gap-28 mb-24">
      <header className="text-center">
        <h1 className="text-3xl md:text-4xl font-bold mb-2">
          <span className="text-primary">NEED HELP?</span> GET IN TOUCH
        </h1>
      </header>

      <div className="grid md:grid-cols-2 gap-12 items-start">
        <div className="space-y-12">
          <section className="flex flex-col gap-2">
            <h2 className="text-xl font-bold">
              WE&apos;RE HERE TO <span className="text-[#ff5722]">HELP!</span>
            </h2>
            <div className="w-full border-[1px] border-[#FFFFFF4D]" />
            <p className="text-gray-300 mb-4">
              We&apos;d be happy to assist with any question you may have,
              whether you&apos;re a customer or not. Our goal is to ensure that
              you have all the support they need, no matter what.
            </p>
            <p className="text-gray-300">
              If you&apos;re already a customer, we&apos;re here for you long
              after accessing our services, and we&apos;re committed to
              providing you with the best possible experience.
            </p>
          </section>

          {/* How to contact us section */}
          <section className="flex flex-col gap-2">
            <h2 className="text-xl font-bold">
              HOW TO <span className="text-[#ff5722]">CONTACT US</span>
            </h2>
            <div className="w-full border-[1px] border-[#FFFFFF4D]" />
            <p className="text-gray-300 mb-4">
              To get in touch, you can send us a message on Instagram or
              Discord. This is where we provide direct support to our customers
              and anyone else needs assistance.
            </p>
            <p className="text-gray-300">
              Please allow at least 24 hours for a response, but we&apos;ll
              always do our best to get back to you. Our support team is there
              to help you quickly as possible.
            </p>
          </section>

          <section className="flex flex-col gap-2">
            <h2 className="text-xl font-bold">
              CHECK OUT OUR <span className="text-[#ff5722]">FAQ</span>
            </h2>
            <div className="w-full border-[1px] border-[#FFFFFF4D]" />
            <p className="text-gray-300 mb-4">
              Before reaching out, take a look at our frequently asked
              questions. We&apos;ve compiled the answers to your questions
              there, saving you time and helping you get started faster.
            </p>
            <p className="text-gray-300 mb-4">
              We&apos;re excited to have you join the family and can&apos;t wait
              to help you succeed with Baker&apos;s Bot!
            </p>
            <Button
              endIcon={<ArrowForwardIosIcon fontSize="small" />}
              className="w-fit !px-5 !py-2"
            >
              FAQ&apos;s
            </Button>
          </section>
        </div>
        <div className="flex justify-center md:justify-end">
          <img
            src="src/assets/Contact/phone.png"
            alt="Baker's Bot mobile app"
            width={350}
          />
        </div>
      </div>
      {/* Watch videos section */}
      <section className="flex flex-col gap-2">
        <h2 className="text-xl font-bold">
          WATCH VIDEOS{" "}
          <span className="text-[#ff5722]">OF BAKER&apos;S BOT</span>
        </h2>
        <div className="w-full border-[1px] border-[#FFFFFF4D]" />
        <p className="text-gray-300 mb-8">
          If you want to see how Baker&apos;s Bot works or learn how to
          purchase, check out the videos below:
        </p>

        <div className="grid md:grid-cols-2 gap-6">
          <div>
            <h3 className="p-3 font-medium">HOW TO PURCHASE</h3>
            <img
              src="https://img.youtube.com/vi/o_64vhfMMRg/0.jpg"
              alt="How to purchase tutorial"
              className="w-full rounded-lg cursor-pointer"
              onClick={() =>
                window.open(
                  "https://www.youtube.com/watch?v=o_64vhfMMRg",
                  "_blank",
                )
              }
            />
          </div>

          <div>
            <h3 className="p-3 font-medium">HOW BAKER&apos;S BOT WORKS</h3>
            <img
              src="https://img.youtube.com/vi/abrWskqeJZk/0.jpg"
              alt="How Baker's Bot works tutorial"
              className="w-full rounded-lg cursor-pointer"
              onClick={() =>
                window.open(
                  "https://www.youtube.com/watch?v=abrWskqeJZk",
                  "_blank",
                )
              }
            />
          </div>
        </div>
      </section>
      <ReadySnipe />
    </div>
  );
}
