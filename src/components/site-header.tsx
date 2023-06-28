"use client"

import Link from "next/link"
import { usePathname } from "next/navigation"
import { cn, getTitle } from "~/lib/utils"

export default function SiteHeader() {
  const pathname = usePathname()
  return (
    <header className="mt-8 flex w-full items-center justify-between md:mt-16">
      <h1 className="text-4xl font-bold">{getTitle(pathname)}</h1>
      <nav className="flex items-center gap-2">
        <Link
          href="/thoughts"
          className={cn(
            "border-b border-mauve7 leading-none transition-colors hover:border-mauve8 hover:text-mauve11",
            pathname === "/thoughts" &&
              "pointer-events-none border-transparent text-mauve11"
          )}
        >
          Thoughts
        </Link>
        <Link
          href="/projects"
          className={cn(
            "border-b border-mauve7 leading-none transition-colors hover:border-mauve8 hover:text-mauve11",
            pathname === "/projects" &&
              "pointer-events-none border-transparent text-mauve11"
          )}
        >
          Projects
        </Link>
        <Link
          href="/"
          className={cn(
            "border-b border-mauve7 leading-none transition-colors hover:border-mauve8 hover:text-mauve11",
            pathname === "/" &&
              "pointer-events-none border-transparent text-mauve11"
          )}
        >
          About
        </Link>
      </nav>
    </header>
  )
}
