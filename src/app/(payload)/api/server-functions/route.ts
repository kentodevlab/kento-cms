import { NextRequest } from "next/server"
import configPromise from "@payload-config"
import { importMap } from "../../admin/importMap"

export const dynamic = "force-dynamic"

export async function POST(request: NextRequest) {
  const { handleServerFunctions } = await import("@payloadcms/next/layouts")
  const body = await request.json()
  const result = await handleServerFunctions({
    config: configPromise,
    importMap,
    name: body.name,
    args: body.args,
  })
  return Response.json(result)
}
