import ArrowForwardIosIcon from "@mui/icons-material/ArrowForwardIos";
import { Box, Button, Container } from "@mui/material";

const PRIVACY_SECTIONS = [
  {
    id: "privacy-policy",
    title: "PRIVACY POLICY",
    content: "Effective Date: September 2024",
    isHeader: true,
  },
  {
    id: "introduction",
    title: "INTRODUCTION",
    content: `At Baker's Bot, we are committed to protecting your privacy. This Privacy Policy outlines:

• The types of information we collect
• How we use it, and
• The measures we take to ensure its protected.

By using our services, you agree to the practices described in this policy.`,
  },
  {
    id: "information-we-collect",
    title: "INFORMATION WE COLLECT",
    content: `We only collect the minimum information necessary for account management and verification purposes. This includes:

• Name
• Instagram Username
• Email Address

We do not collect any information related to your EA account or the Web App.`,
  },
  {
    id: "how-we-use-your-information",
    title: "HOW WE USE YOUR INFORMATION",
    content: `The information we collect is used solely for:

• Verifying customer accounts
• Managing access to Baker's Bot, and
• Ensuring customer support and service continuity.

We do not use your information for marketing purposes or share it with third parties, except as required by law.`,
  },
  {
    id: "data-protection",
    title: "DATA PROTECTION",
    content: `We take reasonable measures to protect the information you provide from unauthorized access, use, or disclosure. However, no method of transmission over the Internet or electronic storage is 100% secure, and we cannot guarantee absolute security.`,
  },
  {
    id: "third-party-links",
    title: "THIRD-PARTY LINKS",
    content: `Our website or services may contain links to external websites. We are not responsible for the privacy practices or content of third-party websites.`,
  },
  {
    id: "changes-to-this-privacy-policy",
    title: "CHANGES TO THIS PRIVACY POLICY",
    content: `We may update this Privacy Policy from time to time. Any changes will be reflected on this page with an updated effective date. By continuing to use our services after any changes become effective, you agree to the revised policy.`,
  },
];

export default function PrivacyPolicy() {
  return (
    <Box className="min-h-screen text-white flex flex-col items-center py-12">
      <Container maxWidth="md">
        <h1 className="text-3xl text-center md:text-4xl font-bold mb-15">
          PRIVACY POLICY
        </h1>

        <div className="border border-primary rounded-xl p-6 md:p-8 mb-10">
          <div className="space-y-8">
            {PRIVACY_SECTIONS.map((section, index) => (
              <PolicySection
                key={index}
                title={section.title}
                content={section.content}
                isHeader={section.isHeader}
                isFirst={index === 0}
              />
            ))}
          </div>
        </div>
        <div className="w-full flex justify-end">
          <Button
            endIcon={<ArrowForwardIosIcon fontSize="small" />}
            className="w-fit !px-5 !py-2 !bg-[#ff5722] !text-white hover:!bg-[#e64a19]"
          >
            Return to home page
          </Button>
        </div>
      </Container>
    </Box>
  );
}

function PolicySection({ title, content, isHeader = false, isFirst = false }) {
  return (
    <div className="text-white flex flex-col gap-3">
      {!isFirst && <div className="w-full border-[1px] border-[#ffffff]/25" />}
      <h3 className={`font-bold ${isHeader ? "text-lg" : ""}`}>{title}</h3>
      <div className="whitespace-pre-line">{content}</div>
    </div>
  );
}
