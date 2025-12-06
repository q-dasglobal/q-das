import { defineType } from "sanity";

export default defineType({
  name: "codeBlock",
  title: "Code Block",
  type: "object",
  fields: [
    {
      name: "language",
      title: "Language",
      type: "string",
      options: {
        list: [
          { title: "JavaScript", value: "javascript" },
          { title: "TypeScript", value: "typescript" },
          { title: "Python", value: "python" },
          { title: "JSON", value: "json" },
          { title: "Bash", value: "bash" },
          { title: "HTML", value: "html" },
          { title: "CSS", value: "css" },
        ],
      },
    },
    { name: "filename", title: "Filename", type: "string" },
    { name: "code", title: "Code", type: "text", rows: 10 },
  ],
});
