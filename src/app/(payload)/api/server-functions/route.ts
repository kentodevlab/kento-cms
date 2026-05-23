import { handleServerFunctions } from "@payloadcms/next/utilities"
import { NextRequest } from "next/server"

export async function POST(request: NextRequest) {
  const { handler } = await handleServerFunctions({ request })
  return handler(request)
}
