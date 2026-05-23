import type { CollectionConfig } from "payload"

export const Services: CollectionConfig = {
  slug: "services",
  admin: { useAsTitle: "title" },
  fields: [
    { name: "title", type: "text", required: true },
    { name: "description", type: "textarea" },
    { name: "icon", type: "text" },
    { name: "features", type: "array", fields: [{ name: "feature", type: "text" }] },
    { name: "order", type: "number" },
  ],
}
