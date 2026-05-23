import {
  REST_DELETE,
  REST_GET,
  REST_OPTIONS,
  REST_PATCH,
  REST_POST,
  REST_PUT,
} from "@payloadcms/next/routes"
import configPromise from "@payload-config"

const wrap = (
  handler: (config: any) => (req: Request, args: any) => Promise<Response>
) => {
  return async (request: Request, args: { params: Promise<any> }) => {
    const cfg = await configPromise
    return handler(cfg)(request, args)
  }
}

export const GET = wrap(REST_GET)
export const POST = wrap(REST_POST)
export const PUT = wrap(REST_PUT)
export const PATCH = wrap(REST_PATCH)
export const DELETE = wrap(REST_DELETE)
export const OPTIONS = wrap(REST_OPTIONS)
