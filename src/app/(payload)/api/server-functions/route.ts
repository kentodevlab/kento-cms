import { handleServerFunctions } from "@payloadcms/next/layouts"
import { NextRequest } from "next/server"

export async function POST(request: NextRequest) {
  const { handler } = await handleServerFunctions({ request })
  return handler(request)
}
