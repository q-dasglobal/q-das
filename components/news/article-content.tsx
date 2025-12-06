"use client";

import { PortableText, PortableTextBlock } from "@portabletext/react";
import { useTheme } from "next-themes";
import { Prism as SyntaxHighlighter } from "react-syntax-highlighter";
import { vscDarkPlus } from "react-syntax-highlighter/dist/esm/styles/prism";
import { HiCheck, HiClipboard, HiExternalLink } from "react-icons/hi";
import { useState } from "react";
import Link from "next/link";
import { ImageWithFallback } from "@/components/shared/image-with-fallback";
import type {
  NewsPortableText,
  CodeBlock,
  SanityImage,
} from "@/lib/types/news";
import { urlFor } from "@/lib/sanity/image";

interface ArticleContentProps {
  content: NewsPortableText;
  className?: string;
}

export function ArticleContent({
  content,
  className = "",
}: ArticleContentProps) {
  const { theme: _theme } = useTheme();
  const [copiedCode, setCopiedCode] = useState<string | null>(null);

  const copyToClipboard = async (text: string, codeKey: string) => {
    await navigator.clipboard.writeText(text);
    setCopiedCode(codeKey);
    setTimeout(() => setCopiedCode(null), 2000);
  };

  const components = {
    types: {
      // Custom code block renderer
      codeBlock: ({ value }: { value: CodeBlock }) => {
        const { language, filename, code } = value;
        const codeKey = `${language}-${code.slice(0, 20)}`;

        return (
          <div className="group relative my-8">
            {/* IDE-style header */}
            <div className="flex items-center justify-between rounded-t-lg border border-b-0 border-gray-200 bg-gray-50 px-4 py-3">
              <div className="flex items-center gap-2">
                {/* IDE-style dots */}
                <div className="flex gap-1.5">
                  <div className="h-2.5 w-2.5 rounded-full bg-red-400"></div>
                  <div className="h-2.5 w-2.5 rounded-full bg-yellow-400"></div>
                  <div className="h-2.5 w-2.5 rounded-full bg-green-400"></div>
                </div>
                <span className="ml-2 font-mono text-xs text-gray-500">
                  {filename || language || "code"}
                </span>
              </div>
              <button
                onClick={() => copyToClipboard(code, codeKey)}
                className="hover:text-primary flex items-center gap-1.5 rounded-md bg-white px-2 py-1 text-xs font-medium text-gray-500 shadow-sm ring-1 ring-gray-200 transition-colors"
              >
                {copiedCode === codeKey ? (
                  <>
                    <HiCheck className="h-3.5 w-3.5 text-green-500" />
                    <span>Copied!</span>
                  </>
                ) : (
                  <>
                    <HiClipboard className="h-3.5 w-3.5" />
                    <span>Copy</span>
                  </>
                )}
              </button>
            </div>
            {/* Code content */}
            <div className="overflow-hidden rounded-b-lg border border-gray-200">
              <SyntaxHighlighter
                language={language || "text"}
                style={vscDarkPlus}
                customStyle={{
                  margin: 0,
                  borderRadius: 0,
                  fontSize: "0.875rem",
                  lineHeight: "1.7",
                  padding: "1.25rem",
                }}
                wrapLines={true}
                showLineNumbers={true}
                lineNumberStyle={{
                  color: "#6b7280",
                  minWidth: "2.5rem",
                  paddingRight: "1rem",
                  textAlign: "right",
                }}
              >
                {code}
              </SyntaxHighlighter>
            </div>
          </div>
        );
      },

      // Enhanced image renderer
      image: ({ value }: { value: SanityImage }) => {
        const { alt, caption } = value;

        if (!value.asset || !value.asset._ref) {
          return null;
        }

        try {
          const imageUrl = urlFor(value).width(800).height(600).url();

          return (
            <div className="my-8 overflow-hidden rounded-2xl border border-gray-100 shadow-sm">
              <div className="relative aspect-video w-full bg-gray-100">
                <ImageWithFallback
                  src={imageUrl}
                  alt={alt || ""}
                  fill
                  className="object-cover"
                />
              </div>
              {(alt || caption) && (
                <div className="border-t border-gray-100 bg-gray-50 px-4 py-3 text-center text-sm text-gray-500 italic">
                  {caption || alt}
                </div>
              )}
            </div>
          );
        } catch (error) {
          console.warn("Failed to generate image URL:", error);
          return null;
        }
      },

      // Table renderer
      table: ({
        value,
      }: {
        value: {
          headers: string[];
          rows: { cells: string[] }[];
          caption?: string;
        };
      }) => {
        const { headers = [], rows = [], caption } = value ?? {};
        if (!headers.length && !rows.length) return null;

        return (
          <div className="my-8 overflow-x-auto rounded-xl border border-gray-200 shadow-sm">
            <table className="w-full min-w-[600px] border-collapse text-left text-sm">
              {caption && (
                <caption className="border-b border-gray-200 bg-gray-50 px-4 py-3 text-left text-sm font-medium text-gray-700">
                  {caption}
                </caption>
              )}
              <thead className="bg-gray-50">
                <tr>
                  {headers.map((h, i) => (
                    <th
                      key={i}
                      className="border-b border-gray-200 px-6 py-4 font-semibold text-gray-900"
                    >
                      {h}
                    </th>
                  ))}
                </tr>
              </thead>
              <tbody>
                {rows.map((row, rIdx) => (
                  <tr
                    key={rIdx}
                    className="group border-b border-gray-100 transition-colors last:border-0 hover:bg-gray-50/50"
                  >
                    {row.cells?.map((cell, cIdx) => (
                      <td key={cIdx} className="px-6 py-4 text-gray-600">
                        {cell}
                      </td>
                    ))}
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        );
      },
    },

    block: {
      // Enhanced headings
      h1: ({
        children,
        value,
      }: {
        children?: React.ReactNode;
        value?: PortableTextBlock;
      }) => (
        <h1
          id={value?._key}
          className="font-display mt-10 mb-6 scroll-mt-20 text-4xl font-bold text-gray-900 first:mt-0"
        >
          {children}
        </h1>
      ),

      h2: ({
        children,
        value,
      }: {
        children?: React.ReactNode;
        value?: PortableTextBlock;
      }) => (
        <h2
          id={value?._key}
          className="font-display mt-12 mb-6 scroll-mt-20 text-2xl font-bold text-gray-900"
        >
          {children}
        </h2>
      ),

      h3: ({
        children,
        value,
      }: {
        children?: React.ReactNode;
        value?: PortableTextBlock;
      }) => (
        <h3
          id={value?._key}
          className="font-display mt-8 mb-4 scroll-mt-20 text-xl font-bold text-gray-900"
        >
          {children}
        </h3>
      ),

      h4: ({
        children,
        value,
      }: {
        children?: React.ReactNode;
        value?: PortableTextBlock;
      }) => (
        <h4
          id={value?._key}
          className="font-display mt-6 mb-4 scroll-mt-20 text-lg font-bold text-gray-900"
        >
          {children}
        </h4>
      ),

      // Enhanced blockquotes
      blockquote: ({ children }: { children?: React.ReactNode }) => (
        <blockquote className="border-primary my-8 rounded-r-lg border-l-4 bg-gray-50 py-4 pr-4 pl-6 leading-relaxed text-gray-700 italic">
          {children}
        </blockquote>
      ),

      // Normal paragraphs
      normal: ({ children }: { children?: React.ReactNode }) => (
        <p className="my-6 leading-relaxed text-gray-600">{children}</p>
      ),
    },

    list: {
      // Enhanced lists
      bullet: ({ children }: { children?: React.ReactNode }) => (
        <ul className="my-6 list-disc space-y-2 pl-6 text-gray-600 marker:text-gray-400">
          {children}
        </ul>
      ),

      number: ({ children }: { children?: React.ReactNode }) => (
        <ol className="my-6 list-decimal space-y-2 pl-6 text-gray-600 marker:font-medium marker:text-gray-900">
          {children}
        </ol>
      ),
    },

    listItem: {
      bullet: ({ children }: { children?: React.ReactNode }) => (
        <li className="pl-2">{children}</li>
      ),

      number: ({ children }: { children?: React.ReactNode }) => (
        <li className="pl-2">{children}</li>
      ),
    },

    marks: {
      // Enhanced links
      link: ({
        children,
        value,
      }: {
        children?: React.ReactNode;
        value?: { href?: string };
      }) => {
        const isExternal = value?.href?.startsWith("http");

        if (isExternal) {
          return (
            <Link
              href={value?.href || "#"}
              target="_blank"
              rel="noopener noreferrer"
              className="text-primary hover:text-primary/80 inline-flex items-center gap-0.5 font-medium transition-colors hover:underline"
            >
              {children}
              <HiExternalLink className="h-3.5 w-3.5" />
            </Link>
          );
        }

        return (
          <Link
            href={value?.href || "#"}
            className="text-primary hover:text-primary/80 font-medium transition-colors hover:underline"
          >
            {children}
          </Link>
        );
      },

      // Inline code
      code: ({ children }: { children?: React.ReactNode }) => (
        <code className="rounded-md border border-gray-200 bg-gray-100 px-1.5 py-0.5 font-mono text-sm text-gray-800">
          {children}
        </code>
      ),

      // Text formatting
      strong: ({ children }: { children?: React.ReactNode }) => (
        <strong className="font-bold text-gray-900">{children}</strong>
      ),

      em: ({ children }: { children?: React.ReactNode }) => (
        <em className="text-gray-800 italic">{children}</em>
      ),
    },
  };

  return (
    <div className={`max-w-none ${className}`}>
      <PortableText value={content} components={components} />
    </div>
  );
}
