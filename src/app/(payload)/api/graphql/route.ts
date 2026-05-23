import { GRAPHQL_POST } from "@payloadcms/next/routes"
import configPromise from "@payload-config"

export const POST = async (request: Request) => {
  return GRAPHQL_POST(configPromise)(request)
}
