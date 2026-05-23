import { RootLayout, handleServerFunctions } from "@payloadcms/next/layouts"
import configPromise from "@payload-config"
import type { ServerFunctionClient } from "payload"
import { importMap } from "./admin/importMap"

export { metadata } from "@payloadcms/next/layouts"

export default async function PayloadLayout({
  children,
}: {
  children: React.ReactNode
}) {
  const serverFunction: ServerFunctionClient = async ({ name, args }) => {
    return handleServerFunctions({
      config: configPromise,
      importMap,
      name,
      args,
    })
  }

  return (
    <RootLayout
      config={configPromise}
      importMap={importMap}
      serverFunction={serverFunction}
    >
      {children}
    </RootLayout>
  )
}
