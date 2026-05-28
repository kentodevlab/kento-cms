import type { CollectionConfig } from "payload"

export const Blog: CollectionConfig = {
  slug: "blog",
  admin: { useAsTitle: "title" },
  access: { read: () => true },
  fields: [
    { name: "title", type: "text", required: true },
    { name: "slug", type: "text", required: true, unique: true },
    { name: "excerpt", type: "textarea" },
    { name: "content", type: "richText" },
    { name: "cover", type: "upload", relationTo: "media" },
    { name: "tags", type: "array", fields: [{ name: "tag", type: "text" }] },
    { name: "publishedAt", type: "date" },
  ],
}
