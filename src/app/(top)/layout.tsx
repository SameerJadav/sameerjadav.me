import SiteHeader from "~/components/SiteHeader"

interface TopLayoutProps {
  children: React.ReactNode
}

export default function TopLayout({ children }: TopLayoutProps) {
  return (
    <>
      <SiteHeader />
      <main>{children}</main>
    </>
  )
}
