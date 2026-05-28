import { buildConfig } from "payload"
import { mongooseAdapter } from "@payloadcms/db-mongodb"
import { lexicalEditor } from "@payloadcms/richtext-lexical"
import { vercelBlobStorage } from "@payloadcms/storage-vercel-blob"
import { Users } from "./collections/Users"
import { Services } from "./collections/Services"
import { Portfolio } from "./collections/Portfolio"
import { Media } from "./collections/Media"
import { Team } from "./collections/Team"
import { Testimonials } from "./collections/Testimonials"
import { Blog } from "./collections/Blog"
import { Settings } from "./collections/Settings"

export default buildConfig({
  admin: {
    user: "users",
    meta: {
      titleSuffix: " | Kento Dev Lab CMS",
    },
  },
  collections: [
    Users,
    Services,
    Portfolio,
    Media,
    Team,
    Testimonials,
    Blog,
    Settings,
  ],
  editor: lexicalEditor({}),
  secret: process.env.PAYLOAD_SECRET || "",
  typescript: {
    outputFile: process.cwd() + "/payload-types.ts",
  },
  db: mongooseAdapter({
    url: process.env.DATABASE_URI || "",
  }),
  plugins: [
    vercelBlobStorage({
      enabled: true,
      collections: {
        media: true,
      },
      token: process.env.BLOB_READ_WRITE_TOKEN || "",
    }),
  ],
  cors: ["https://kentodevlab.com"],
})
