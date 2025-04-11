import ArrowForwardIosIcon from "@mui/icons-material/ArrowForwardIos";
import { Box, Button, Container } from "@mui/material";

export default function RefundPolicy() {
  return (
    <Box className="min-h-screen text-white flex flex-col items-center py-12">
      <Container maxWidth="md">
        <h1 className="text-3xl text-center md:text-4xl font-bold mb-15">
          REFUND POLICY
        </h1>

        <div className="border border-primary rounded-xl p-6 md:p-8 mb-10">
          <div className="space-y-8">
            {/* General Refund Policy */}
            <div className="text-white flex flex-col gap-5">
              <p>All sales are final, and refunds are not possible.</p>

              <p>
                Refunds will only be considered under the following
                circumstances:
              </p>

              <ul className="list-disc pl-8 space-y-1">
                <li>You have not been able to set up or activate the bot.</li>
                <li>It has been less than 14 days since your purchase.</li>
              </ul>

              <p>
                If both these conditions are met, you may be eligible for a
                refund, but it is handled on a case-by-case basis. Baker's Bot
                will do everything possible to assist with setup before a refund
                is considered. If the bot has been activated (meaning the bot
                has been set up and used), you are no longer eligible for a
                refund.
              </p>
            </div>

            <div className="w-full border-[1px] border-[#ffffff]/25" />

            {/* Dispute Resolution */}
            <div className="text-white flex flex-col gap-3">
              <h3 className="font-bold">DISPUTE RESOLUTION:</h3>
              <p>
                If you encounter any issues with the service, we encourage you
                to contact Baker's Bot directly to address and resolve the
                matter as quickly as possible. Our team is committed to
                resolving any concerns you may have. Please note that disputes
                related to account bans or penalties imposed by EA or any
                third-party services will not be considered.
              </p>
            </div>

            <div className="w-full border-[1px] border-[#ffffff]/25" />

            {/* License Restrictions */}
            <div className="text-white flex flex-col gap-3">
              <h3 className="font-bold">LICENSE RESTRICTIONS:</h3>
              <p>
                Your purchase grants you a personal, non-transferable license to
                use Baker's Bot with your unique{" "}
                <strong>Baker's Bot Key</strong> (your username). This key
                allows you to access the bot's features, and it must not be
                shared or distributed.
              </p>
              <p>
                Users are prohibited from copying, modifying, or distributing
                the bot software. Any violation will result in termination of
                access without a refund.
              </p>
            </div>

            <div className="w-full border-[1px] border-[#ffffff]/25" />

            {/* Use Limitation */}
            <div className="text-white flex flex-col gap-3">
              <h3 className="font-bold">USE LIMITATION:</h3>
              <p>
                Each <strong>Baker's Bot Key</strong> (your username and
                password) is tied to a single user account and may not be shared
                across multiple accounts or with other users. Any attempt to
                bypass this will result in immediate termination of access
                without refund.
              </p>
            </div>
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
