import type { CollectionConfig } from "payload"

export const Testimonials: CollectionConfig = {
  slug: "testimonials",
  admin: { useAsTitle: "name" },
  fields: [
    { name: "name", type: "text", required: true },
    { name: "role", type: "text" },
    { name: "company", type: "text" },
    { name: "text", type: "textarea", required: true },
    { name: "rating", type: "number", min: 1, max: 5 },
  ],
}
