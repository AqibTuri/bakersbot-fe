import ArrowForwardIosIcon from "@mui/icons-material/ArrowForwardIos";
import {
  Accordion,
  AccordionDetails,
  AccordionSummary,
  Button,
} from "@mui/material";
import KeyboardArrowDownIcon from "@mui/icons-material/KeyboardArrowDown";
import ReadySnipe from "../LandingPage/components/ReadySnipe.jsx";

const FAQS = [
  {
    id: 1,
    question: "What is Sniping?",
    detail:
      "Sniping refers to purchasing players listed on the transfer market at a price lower than what they are actually selling for. You may have seen a player who might sell for 15k gets listed for 12k, or 10k, or even a player worth 400k gets listed for 100k or lower. Sniping is essentially buying those players at a cheaper price before others can.",
  },
  {
    id: 2,
    question: "What is Baker's Bot?",
    detail:
      "Our bot automates the sniping process. Just tell the bot which player you want and at what price, and it will search for that player and list them on the market for you. You can even tell the bot to keep the player instead of selling them—it’s all up to you!",
  },
  {
    id: 3,
    question: "What devices can I use Baker’s Bot on?",
    detail:
      "Baker’s Bot works on all platforms—PlayStation, Xbox, and PC. All you need is access to the FIFA Web App, which can be used on any computer or laptop (MacOS, Windows, Chromebook, etc.).",
  },
  {
    id: 4,
    question: "How do I get Baker’s Bot?",
    detail:
      "Just visit our purchase page, complete your purchase, and you're all set. After that, you’ll have access to our tutorial videos, guiding you through setting up the bot, using it, and even giving tips on how to get started. We also have a video demonstrating how to make the purchase.",
  },
  {
    id: 5,
    question: "Can I see the bot in action?",
    detail:
      "Absolutely! Check out our video for a basic demonstration of how Baker’s Bot works. This is just a brief video to quickly show you how it works—the bot has too many features to showcase in a small clip, but don't worry, if you end up getting it, our tutorial video will explain everything!",
  },
  {
    id: 6,
    question: "What happens after I purchase? Is there a tutorial?",
    detail:
      "After your purchase, you’ll be prompted to create an account that you’ll use to log into the bot and our website. Once that's done, you’ll have access to a detailed tutorial video showing you how to set up and use the bot, plus tips and tricks to maximize your success.",
  },
  {
    id: 7,
    question: "How many coins can I make?",
    detail:
      "It depends on you. We’ve had customers make over 100k coins a day, some even 300k a day, while others maybe 50k a day. As a beginner, we recommend aiming for 33k a day, which gives you approximately 1 million coins a month. Most new users easily make over 50k a day within their first week. Once you get the hang of it, the sky’s the limit!",
  },
  {
    id: 8,
    question: "Do you have a Discord server that provides sniping filters?",
    detail:
      "Yes, we do! It's an additional purchase, but we highly recommend it to get the most out of the bot. Our Discord server posts daily filters and has an active community that helps each other out, shares sniping tips, and answers questions.",
  },
  {
    id: 9,
    question: "How many coins do I need to start?",
    detail:
      "You can start with as little as 5k coins. The bot has no minimum requirement. If you’re not sure who to snipe, our tutorial video provides tips, and our premium Discord gives you even more guidance.",
  },
  {
    id: 10,
    question: "How many accounts can I use the bot on?",
    detail:
      "You can use the bot on one account at a time. If you ever need to switch accounts, just let us know and we’ll help reassign the bot to your new account.",
  },
  {
    id: 11,
    question: "How many devices can I use the bot on?",
    detail:
      "You can use the bot on as many devices as you like, as long as it's the same account. Whether you're at home, school, work, or anywhere in the world, you're good to go!",
  },
  {
    id: 12,
    question: "Is the bot a one-time purchase or monthly?",
    detail:
      "The bot is a one-time purchase. You get 365 days of access to the bot—even if that means your usage carries over into the next game. After that, you'll need to repurchase.",
  },
  {
    id: 13,
    question: "Can I purchase on my phone and use it on my computer?",
    detail:
      "Yes! You can make your purchase on any device. Just keep in mind that you’ll need to set up the bot on your computer or laptop.",
  },
  {
    id: 14,
    question: "Do you need access to my EA account?",
    detail:
      "No, we do not need access to your EA account. Baker’s Bot works independently and automates the sniping process within the Web App.",
  },
  {
    id: 15,
    question: "Can I get banned?",
    detail:
      "There’s always a small risk. It depends on how you use it. If you use the bot all day without breaks, you're more likely to get flagged. Most of our customers have been fine. If you do get banned, it’s usually just a Web App ban.",
  },
];
export default function FAQPage() {
  return (
    <div className="min-h-screen text-white">
      {/* Header */}
      <header className="text-center mb-12">
        <h1 className="text-3xl md:text-4xl font-bold">FAQ&apos;S</h1>
      </header>

      <div className="max-w-7xl mx-auto px-20 flex flex-col gap-20">
        {/* FAQ Accordion */}

        <div className="rounded-xl overflow-hidden p-5 border-[#C74507] border-[1px]">
          {/* FAQ Item 1 - Expanded by default */}

          {FAQS.map(({ question, detail, id }) => (
            <Accordion
              defaultExpanded={id === 1}
              sx={{
                background: "transparent",
                boxShadow: "none",
                borderBottom: "1px solid rgba(255,255,255,0.1)",
                "&:before": { display: "none" },
              }}
            >
              <AccordionSummary
                expandIcon={<KeyboardArrowDownIcon sx={{ color: "#ff5722" }} />}
                sx={{
                  borderBottom: "none",
                  color: "white",
                  "& .MuiAccordionSummary-content": { margin: "12px 0" },
                }}
              >
                <h3 className="font-bold">{question}</h3>
              </AccordionSummary>
              <AccordionDetails sx={{ color: "#b0b0b0", paddingTop: 0 }}>
                <p>{detail}</p>
              </AccordionDetails>
            </Accordion>
          ))}
        </div>

        {/* Question Not Answered Section */}
        <div className="rounded-xl p-8 relative">
          <div className="md:max-w-[60%]">
            <h2 className="text-2xl font-bold mb-2">
              I HAVE A QUESTION THAT <br />
              <span className="text-primary">ISN&apos;T ANSWERED HERE.</span>
            </h2>
            <p className="text-gray-400 mb-6">
              No problem! Just find us on Instagram or Discord and we&apos;ll
              answer any questions you have.
            </p>
            <Button
              endIcon={<ArrowForwardIosIcon fontSize="small" />}
              className="w-fit !px-5 !py-2"
            >
              DM US ON INSTAGRAM
            </Button>
          </div>
          <div className="absolute bottom-0 right-0 hidden md:block">
            <img
              src="src/assets/FAQs/run.png"
              alt="Character illustration"
              width={200}
              height={200}
              className="mb-[-10px]"
            />
          </div>
        </div>
        <ReadySnipe />
      </div>
    </div>
  );
}
