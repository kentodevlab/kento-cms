import { GRAPHQL_PLAYGROUND_GET } from "@payloadcms/next/routes"
import configPromise from "@payload-config"

export const GET = async (request: Request) => {
  return GRAPHQL_PLAYGROUND_GET(configPromise)(request)
}
