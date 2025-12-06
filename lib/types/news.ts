export interface PortableTextSpan {
  _type: "span";
  _key?: string;
  text: string;
  marks?: string[];
}

export interface PortableTextBlock {
  _type: "block";
  _key?: string;
  style?: "normal" | "h1" | "h2" | "h3" | "h4" | "blockquote";
  listItem?: "bullet" | "number";
  children: PortableTextSpan[];
  markDefs?: { _key: string; _type: string }[];
}

export interface SanityImage {
  _type: "image";
  _key?: string;
  asset: {
    _ref: string;
    _type: "reference";
  };
  alt?: string;
  caption?: string;
  featured?: boolean;
}

export interface CodeBlock {
  _type: "codeBlock";
  _key?: string;
  language: string;
  filename?: string;
  code: string;
  highlightedLines?: number[];
}

export interface Table {
  _type: "table";
  _key?: string;
  headers: string[];
  rows: { _key?: string; cells: string[] }[];
  caption?: string;
}

export type NewsPortableTextItem =
  | PortableTextBlock
  | SanityImage
  | CodeBlock
  | Table;

export type NewsPortableText = NewsPortableTextItem[];
