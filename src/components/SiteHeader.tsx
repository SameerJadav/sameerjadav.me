"use client"

import { usePathname } from "next/navigation"
import { cn } from "~/lib/utils"

export default function SiteHeader() {
  const pathname = usePathname()
  return (
    <header className="mt-8 w-full md:mt-16">
      <nav className="flex items-center gap-4">
        <a
          href="/"
          className={cn(
            "text-slate11 transition-colors duration-200 ease-in hover:text-slate12",
            pathname === "/" &&
              "text-slate12 underline decoration-slate7 underline-offset-8 hover:decoration-slate8",
          )}
        >
          Home
        </a>
        <a
          href="/blog"
          className={cn(
            "text-slate11 transition-colors duration-200 ease-in hover:text-slate12",
            pathname === "/blog" &&
              "text-slate12 underline decoration-slate7 underline-offset-8 hover:decoration-slate8",
          )}
        >
          Blog
        </a>
      </nav>
    </header>
  )
}
