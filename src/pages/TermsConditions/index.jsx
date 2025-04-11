import ArrowForwardIosIcon from "@mui/icons-material/ArrowForwardIos";
import { Box, Button, Container, Typography } from "@mui/material";

const TERMS_CONDITIONS = [
  {
    id: 1,
    title: "ACCEPTANCE OF TERMS",
    description:
      "By accessing or using Baker’s Bot services, including but not limited to our website, the bot, or any other products or services provided by Baker’s Bot (collectively, the “Service”), you agree to be bound by these Terms. Your use of the Services signifies your acceptance of the Terms. If you do not agree, do not use the Service.",
  },
  {
    id: 2,
    title: "ACCOUNT CREATION",
    description:
      "To use Baker’s Bot and all its features, you are required to create an account. You must provide accurate and complete information during account creation. You are responsible for all activities that occur on your account and for keeping your password secure. Baker’s Bot will not use your information for purposes other than what is necessary to provide the service.",
  },
  {
    id: 3,
    title: "USE OF THE SERVICES",
    description:
      "Baker’s Bot is a tool to assist enhance your Ultimate Team experience. We are not responsible for how you use it. The way you use the tool is up to you, and you should be aware that EA and other platforms have their own terms of service that you must comply with. Baker’s Bot is not liable for any repercussions or penalties from third parties (e.g., EA) that result from using the bot.",
  },
  {
    id: 4,
    title: "INTELLECTUAL PROPERTY RIGHTS",
    description:
      "All content and materials on Baker’s Bot (including text, graphics, images, logos, and software) are the property of Baker’s Bot. No license is granted for users to copy, modify, distribute, or use any of the software or content in any way. Sharing or distributing Baker’s Bot software is strictly prohibited.",
  },
  {
    id: 5,
    title: "DISCLAIMERS",
    description:
      "Baker’s Bot provides services on an “as is” and “as available” basis. We make no guarantees or warranties, express or implied, about the operation of the services, including uptime or error-free performance. Baker’s Bot is not liable for any damages, direct or indirect, arising from the use of the services.",
  },
  {
    id: 6,
    title: "LIMITATION OF LIABILITY",
    description:
      "Baker’s Bot is not responsible for any damages or losses arising from the use or inability to use the bot. This includes, but is not limited to, bans or restrictions from EA or other third parties.",
  },
];

export default function TermsAndConditions() {
  return (
    <Box className="min-h-screen text-white flex flex-col items-center py-12">
      <Container maxWidth="md">
        <h1 className="text-3xl text-center md:text-4xl font-bold mb-15">
          TERMS AND CONDITIONS
        </h1>

        <div className="border border-primary rounded-xl p-6 md:p-8 mb-10">
          <div className="space-y-8">
            {TERMS_CONDITIONS.map((term, index) => (
              <TermsSection
                key={index}
                number={index + 1}
                title={term.title}
                content={term.description}
              />
            ))}
          </div>
        </div>
        <div className="w-full flex justify-end">
          <Button
            endIcon={<ArrowForwardIosIcon fontSize="small" />}
            className="w-fit !px-5 !py-2"
          >
            Return to home page
          </Button>
        </div>
      </Container>
    </Box>
  );
}

function TermsSection({ number, title, content }) {
  return (
    <div className="text-white flex flex-col gap-5">
      {number !== 1 && (
        <div className="w-full border-[1px] border-[#ffffff]/25" />
      )}
      <h3 className="font-bold">
        {number}. {title}
      </h3>
      <p>{content}</p>
    </div>
  );
}
