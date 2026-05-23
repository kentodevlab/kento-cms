import { handleServerFunctions } from "@payloadcms/next/layouts"
import configPromise from "@payload-config"
import { importMap } from "../../admin/importMap"
import { NextRequest } from "next/server"

export const dynamic = "force-dynamic"

export async function POST(request: NextRequest) {
  const body = await request.json()
  const result = await handleServerFunctions({
    config: configPromise,
    importMap,
    name: body.name,
    args: body.args,
  })
  return Response.json(result)
}
