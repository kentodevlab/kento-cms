import type { CollectionConfig } from "payload"

export const Portfolio: CollectionConfig = {
  slug: "portfolio",
  admin: { useAsTitle: "title" },
  access: { read: () => true },
  fields: [
    { name: "title", type: "text", required: true },
    { name: "company", type: "text" },
    { name: "description", type: "textarea" },
    { name: "detail", type: "textarea" },
    { name: "tags", type: "array", fields: [{ name: "tag", type: "text" }] },
    { name: "category", type: "text" },
    { name: "logo", type: "upload", relationTo: "media" },
    { name: "screenshot", type: "upload", relationTo: "media" },
    { name: "url", type: "text" },
  ],
}
