"use client";

import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { toast } from "sonner";
import { HiMail, HiUser, HiChat } from "react-icons/hi";
import { Loader2 } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Textarea } from "@/components/ui/textarea";
import { cn } from "@/lib/utils";
import {
  contactFormSchema,
  type ContactFormValues,
} from "@/lib/schemas/contact";

export function ContactForm({ className }: { className?: string }) {
  const {
    register,
    handleSubmit,
    reset,
    formState: { errors, isSubmitting },
  } = useForm<ContactFormValues>({
    resolver: zodResolver(contactFormSchema),
  });

  const onSubmit = async (data: ContactFormValues) => {
    try {
      const response = await fetch("/api/contact", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(data),
      });

      const result = await response.json();

      if (!response.ok) {
        throw new Error(result.error || "Failed to send message");
      }

      toast.success("Message sent successfully!", {
        description: "We'll get back to you as soon as possible.",
      });

      reset();
    } catch (error) {
      console.error("Contact form error:", error);
      toast.error("Failed to send message", {
        description:
          error instanceof Error
            ? error.message
            : "Please try again later or contact us directly.",
      });
    }
  };

  return (
    <div
      className={cn(
        "rounded-2xl bg-white p-6 shadow-sm md:rounded-3xl md:p-10",
        className,
      )}
    >
      <h3 className="font-display mb-3 text-2xl font-bold text-gray-900 md:mb-4 md:text-3xl">
        Start The Conversation
      </h3>
      <p className="mb-6 text-base text-gray-600 md:mb-8 md:text-lg">
        Connect with us by filling out the form below — we&apos;ll make sure
        your inquiry gets to the right team.
      </p>

      <form
        onSubmit={handleSubmit(onSubmit)}
        className="space-y-4 md:space-y-6"
        noValidate
      >
        <div className="space-y-2">
          <Label htmlFor="name" className="sr-only">
            Name
          </Label>
          <div className="relative">
            <HiUser className="absolute top-1/2 left-4 h-5 w-5 -translate-y-1/2 text-gray-400" />
            <Input
              id="name"
              placeholder="Name"
              autoComplete="name"
              aria-invalid={!!errors.name}
              aria-describedby={errors.name ? "name-error" : undefined}
              className={cn(
                "focus-visible:ring-primary h-12 rounded-xl border-gray-200 bg-white pr-4 pl-11 text-base placeholder:text-gray-400 md:h-14",
                errors.name && "border-red-500 focus-visible:ring-red-500",
              )}
              {...register("name")}
            />
          </div>
          {errors.name && (
            <p
              id="name-error"
              className="text-sm font-medium text-red-500"
              role="alert"
            >
              {errors.name.message}
            </p>
          )}
        </div>

        <div className="space-y-2">
          <Label htmlFor="email" className="sr-only">
            Email
          </Label>
          <div className="relative">
            <HiMail className="absolute top-1/2 left-4 h-5 w-5 -translate-y-1/2 text-gray-400" />
            <Input
              id="email"
              type="email"
              placeholder="Email"
              autoComplete="email"
              aria-invalid={!!errors.email}
              aria-describedby={errors.email ? "email-error" : undefined}
              className={cn(
                "focus-visible:ring-primary h-12 rounded-xl border-gray-200 bg-white pr-4 pl-11 text-base placeholder:text-gray-400 md:h-14",
                errors.email && "border-red-500 focus-visible:ring-red-500",
              )}
              {...register("email")}
            />
          </div>
          {errors.email && (
            <p
              id="email-error"
              className="text-sm font-medium text-red-500"
              role="alert"
            >
              {errors.email.message}
            </p>
          )}
        </div>

        <div className="space-y-2">
          <Label htmlFor="description" className="sr-only">
            Project description
          </Label>
          <div className="relative">
            <HiChat className="absolute top-4 left-4 h-5 w-5 text-gray-400" />
            <Textarea
              id="description"
              placeholder="Project description"
              aria-invalid={!!errors.description}
              aria-describedby={
                errors.description ? "description-error" : undefined
              }
              className={cn(
                "focus-visible:ring-primary min-h-[120px] rounded-xl border-gray-200 bg-white py-4 pr-4 pl-11 text-base placeholder:text-gray-400 md:min-h-[160px]",
                errors.description &&
                  "border-red-500 focus-visible:ring-red-500",
              )}
              {...register("description")}
            />
          </div>
          {errors.description && (
            <p
              id="description-error"
              className="text-sm font-medium text-red-500"
              role="alert"
            >
              {errors.description.message}
            </p>
          )}
        </div>

        <Button
          type="submit"
          disabled={isSubmitting}
          className="bg-primary hover:bg-primary/90 h-12 w-full rounded-full text-base font-semibold text-white disabled:opacity-70"
        >
          {isSubmitting ? (
            <>
              <Loader2 className="mr-2 h-5 w-5 animate-spin" />
              Sending...
            </>
          ) : (
            "Send Message"
          )}
        </Button>
      </form>
    </div>
  );
}
