"use client"

import { usePathname } from "next/navigation"
import { blog, home, notes } from "~/components/NavItems"

export default function SiteHeader() {
  let pathname = usePathname()
  if (pathname.includes("/blog/")) pathname = "/blog"
  if (pathname.includes("/notes/")) pathname = "/notes"
  return (
    <header className="mt-8 w-full md:mt-16">
      <nav className="flex items-center gap-4">
        {home(pathname)}
        {blog(pathname)}
        {notes(pathname)}
      </nav>
    </header>
  )
}
