import { GRAPHQL_POST } from "@payloadcms/next/routes"
import configPromise from "@payload-config"

export const POST = async (request: Request) => {
  const cfg = await configPromise
  return GRAPHQL_POST(cfg)(request, { params: Promise.resolve({}) })
}
