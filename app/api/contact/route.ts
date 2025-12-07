import { NextRequest, NextResponse } from "next/server";
import { Resend } from "resend";
import { validateTurnstileToken } from "next-turnstile";
import { contactFormSchema } from "@/lib/schemas/contact";
import { ContactEmail } from "@/lib/email/templates/contact-email";

const resend = new Resend(process.env.RESEND_API_KEY);
const isDev = process.env.NODE_ENV === "development";

export async function POST(request: NextRequest) {
  try {
    // Parse request body
    const body = await request.json();

    // Extract Turnstile token
    const { turnstileToken, ...formData } = body;

    // Validate Turnstile token
    if (!turnstileToken || typeof turnstileToken !== "string") {
      return NextResponse.json(
        { error: "Verification failed. Please try again." },
        { status: 400 },
      );
    }

    // Validate token with Cloudflare (sandbox mode in development)
    const turnstileResult = await validateTurnstileToken({
      token: turnstileToken,
      secretKey: process.env.TURNSTILE_SECRET_KEY!,
      sandbox: isDev, // Bypass validation in development
    });

    if (!turnstileResult.success) {
      console.error(
        "Turnstile validation failed:",
        turnstileResult.error_codes,
      );
      return NextResponse.json(
        { error: "Verification failed. Please refresh and try again." },
        { status: 400 },
      );
    }

    // Validate form data with Zod
    const validatedData = contactFormSchema.parse(formData);

    // Send email using Resend
    const { data, error } = await resend.emails.send({
      from: process.env.RESEND_FROM_EMAIL || "onboarding@resend.dev",
      to: process.env.RESEND_TO_EMAIL || "delivered@resend.dev",
      replyTo: validatedData.email,
      subject: `New Contact Form Submission from ${validatedData.name}`,
      react: ContactEmail({
        name: validatedData.name,
        email: validatedData.email,
        description: validatedData.description,
      }),
    });

    if (error) {
      console.error("Resend error:", error);
      return NextResponse.json(
        { error: "Failed to send email. Please try again later." },
        { status: 500 },
      );
    }

    return NextResponse.json(
      { message: "Email sent successfully", id: data?.id },
      { status: 200 },
    );
  } catch (error) {
    // Handle validation errors
    if (error instanceof Error && error.name === "ZodError") {
      return NextResponse.json(
        { error: "Invalid form data. Please check your inputs." },
        { status: 400 },
      );
    }

    // Handle other errors
    console.error("Contact form error:", error);
    return NextResponse.json(
      { error: "An unexpected error occurred. Please try again later." },
      { status: 500 },
    );
  }
}
