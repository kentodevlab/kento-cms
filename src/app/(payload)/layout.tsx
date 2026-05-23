import { RootLayout } from "@payloadcms/next/layouts"
import configPromise from "@payload-config"
import { handleServerFunctions } from "@payloadcms/next/utilities"
import { importMap } from "./admin/importMap"

export { metadata } from "@payloadcms/next/layouts"

export default async function PayloadLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <RootLayout
      config={configPromise}
      importMap={importMap}
      serverFunction={handleServerFunctions}
    >
      {children}
    </RootLayout>
  )
}
