import type { CollectionConfig } from "payload"

export const Settings: CollectionConfig = {
  slug: "settings",
  admin: { useAsTitle: "siteName" },
  fields: [
    { name: "siteName", type: "text" },
    { name: "tagline", type: "text" },
    { name: "contactEmail", type: "email" },
    {
      name: "socialLinks",
      type: "array",
      fields: [
        { name: "platform", type: "text" },
        { name: "url", type: "text" },
      ],
    },
  ],
}
