"use client";

import { useState } from "react";
import Image, { ImageProps } from "next/image";
import { cn } from "@/lib/utils";
import { User, Image as ImageIcon } from "lucide-react";

interface ImageWithFallbackProps extends Omit<ImageProps, "src"> {
  src?: string | null;
  fallbackSrc?: string;
  fallback?: React.ReactNode;
  /**
   * 'content' = Branded logo placeholder (default)
   * 'avatar' = Simple user icon placeholder
   * 'none' = Just the gray box
   */
  variant?: "content" | "avatar" | "none";
}

export function ImageWithFallback({
  src,
  fallbackSrc,
  fallback,
  className,
  alt,
  variant = "content",
  ...props
}: ImageWithFallbackProps) {
  const [error, setError] = useState(false);
  const [prevSrc, setPrevSrc] = useState(src);

  if (src !== prevSrc) {
    setPrevSrc(src);
    setError(false);
  }

  if (!src || src === "" || error) {
    if (fallback) return <>{fallback}</>;

    if (fallbackSrc) {
      return (
        <Image
          src={fallbackSrc}
          alt={alt || "Fallback image"}
          className={className}
          {...props}
        />
      );
    }

    // VARIANT: CONTENT (News, Services, Blogs)
    // Uses the brand logo to look intentional and premium
    if (variant === "content") {
      return (
        <div
          className={cn(
            "group flex h-full w-full flex-col items-center justify-center bg-gray-50 p-6 text-center",
            className,
          )}
        >
          <div className="relative mb-2 h-8 w-auto opacity-40 grayscale transition-all duration-500 group-hover:opacity-100 group-hover:grayscale-0">
            {/* Using Next.js Image for the logo fallback to ensure optimization */}
            <Image
              src="/Logo.png"
              alt="Q-DAS Global"
              width={100}
              height={40}
              className="h-full w-auto object-contain"
            />
          </div>
        </div>
      );
    }

    // VARIANT: AVATAR (Users without initials fallback)
    if (variant === "avatar") {
      return (
        <div
          className={cn(
            "flex h-full w-full items-center justify-center bg-gray-100 text-gray-400",
            className,
          )}
        >
          <User className="h-10 w-10 opacity-50" />
        </div>
      );
    }

    // VARIANT: NONE (Generic)
    return (
      <div
        className={cn(
          "flex h-full w-full items-center justify-center bg-gray-100 text-gray-400",
          className,
        )}
      >
        <ImageIcon className="h-10 w-10 opacity-50" />
      </div>
    );
  }

  return (
    <Image
      src={src}
      alt={alt}
      className={className}
      onError={() => setError(true)}
      {...props}
    />
  );
}
