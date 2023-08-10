"use client"

import { usePathname } from "next/navigation"
import { blog, home, notes } from "~/components/NavItems"

export default function SiteHeader() {
  let pathname = usePathname()
  if (pathname.includes("/blog/")) pathname = "/blog"
  if (pathname.includes("/notes/")) pathname = "/notes"
  return (
    <header className="mt-8 w-full md:mt-16">
      <nav>
        <ul className="flex items-center gap-4">
          <li>{home(pathname)}</li>
          <li>{blog(pathname)}</li>
          <li>{notes(pathname)}</li>
        </ul>
      </nav>
    </header>
  )
}
