import { defineType } from "sanity";

export default defineType({
  name: "table",
  title: "Table",
  type: "object",
  fields: [
    { name: "caption", title: "Caption", type: "string" },
    {
      name: "headers",
      title: "Headers",
      type: "array",
      of: [{ type: "string" }],
    },
    {
      name: "rows",
      title: "Rows",
      type: "array",
      of: [
        {
          type: "object",
          fields: [
            {
              name: "cells",
              title: "Cells",
              type: "array",
              of: [{ type: "string" }],
            },
          ],
        },
      ],
    },
  ],
});
