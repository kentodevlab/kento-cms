import { GRAPHQL_PLAYGROUND_GET } from "@payloadcms/next/routes"
import configPromise from "@payload-config"

export const GET = async (request: Request) => {
  const cfg = await configPromise
  return GRAPHQL_PLAYGROUND_GET(cfg)(request, { params: Promise.resolve({}) })
}
