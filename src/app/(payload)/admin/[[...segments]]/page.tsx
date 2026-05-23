import { RootPage } from "@payloadcms/next/views"
import configPromise from "@payload-config"
import { importMap } from "../importMap"

export default async function AdminPage({
  params,
  searchParams,
}: {
  params: Promise<{ segments: string[] }>
  searchParams: Promise<{ [key: string]: string | string[] }>
}) {
  return RootPage({
    config: configPromise,
    importMap,
    params,
    searchParams,
  })
}
