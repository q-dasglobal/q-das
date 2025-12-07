import {
  Body,
  Container,
  Head,
  Heading,
  Hr,
  Html,
  Img,
  Link,
  Preview,
  Section,
  Text,
  Tailwind,
  pixelBasedPreset,
} from "@react-email/components";

interface ContactEmailProps {
  name: string;
  email: string;
  description: string;
}

const baseUrl = process.env.VERCEL_URL
  ? `https://${process.env.VERCEL_URL}`
  : "";

export function ContactEmail({ name, email, description }: ContactEmailProps) {
  const previewText = `New message from ${name}`;

  return (
    <Html>
      <Head />
      <Tailwind
        config={{
          presets: [pixelBasedPreset],
        }}
      >
        <Body className="mx-auto my-auto bg-white px-2 font-sans">
          <Preview>{previewText}</Preview>
          <Container className="mx-auto my-[40px] max-w-[520px] rounded border border-solid border-[#eaeaea] p-[20px]">
            {/* Logo */}
            <Section className="mt-[32px]">
              <Img
                src="https://res.cloudinary.com/dy55vopm2/image/upload/v1765117017/Logo_lvl2bf.png"
                width="180"
                alt="Q-DAS Global"
                className="mx-auto my-0"
                style={{
                  display: "block",
                  outline: "none",
                  border: "none",
                  textDecoration: "none",
                  margin: "0 auto",
                  height: "auto",
                }}
              />
            </Section>

            {/* Title */}
            <Heading className="mx-0 my-[30px] p-0 text-center text-[24px] font-normal text-black">
              New Contact Form Submission
            </Heading>

            {/* Intro */}
            <Text className="text-[14px] leading-[24px] text-black">
              You have received a new message from your website contact form.
            </Text>

            <Hr className="mx-0 my-[26px] w-full border border-solid border-[#eaeaea]" />

            {/* Sender Info */}
            <Text className="text-[12px] font-semibold tracking-wide text-[#666666] uppercase">
              From
            </Text>
            <Text className="m-0 text-[16px] leading-[24px] font-medium text-black">
              {name}
            </Text>
            <Link
              href={`mailto:${email}`}
              className="text-[14px] text-[#0070f3] no-underline"
            >
              {email}
            </Link>

            <Hr className="mx-0 my-[26px] w-full border border-solid border-[#eaeaea]" />

            {/* Message */}
            <Text className="text-[12px] font-semibold tracking-wide text-[#666666] uppercase">
              Message
            </Text>
            <Text className="text-[14px] leading-[24px] text-black">
              {description}
            </Text>

            <Hr className="mx-0 my-[26px] w-full border border-solid border-[#eaeaea]" />

            {/* Footer */}
            <Text className="text-[12px] leading-[24px] text-[#666666]">
              This message was sent from the{" "}
              <Link
                href={`${baseUrl}/contact`}
                className="text-[#0070f3] no-underline"
              >
                Q-DAS Global
              </Link>{" "}
              website contact form on{" "}
              <span className="text-black">
                {new Date().toLocaleDateString("en-US", {
                  weekday: "long",
                  year: "numeric",
                  month: "long",
                  day: "numeric",
                })}
              </span>
              .
            </Text>
            <Text className="text-[12px] leading-[24px] text-[#666666]">
              You can reply directly to this email to respond to {name}.
            </Text>
          </Container>
        </Body>
      </Tailwind>
    </Html>
  );
}

export default ContactEmail;
