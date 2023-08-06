"use client"

import Link from "next/link"
import { usePathname } from "next/navigation"
import { RoughNotation } from "react-rough-notation"

const home = (pathname: string) => {
  return pathname === "/" ? (
    <RoughNotation type="underline" animate color="#4c5155" show padding={6}>
      <span className="font-medium">Home</span>
    </RoughNotation>
  ) : (
    <Link
      href="/"
      className="text-slate11 transition-colors ease-in hover:text-slate12 focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-slate6"
    >
      Home
    </Link>
  )
}

const blog = (pathname: string) => {
  return pathname === "/blog" ? (
    <RoughNotation type="underline" animate color="#4c5155" show padding={6}>
      <span className="font-medium">Blog</span>
    </RoughNotation>
  ) : (
    <Link
      href="/blog"
      className="text-slate11 transition-colors ease-in hover:text-slate12 focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-slate6"
    >
      Blog
    </Link>
  )
}

const notes = (pathname: string) => {
  return pathname === "/notes" ? (
    <RoughNotation type="underline" animate color="#4c5155" show padding={6}>
      <span className="font-medium">Notes</span>
    </RoughNotation>
  ) : (
    <Link
      href="/notes"
      className="text-slate11 transition-colors ease-in hover:text-slate12 focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-slate6"
    >
      Notes
    </Link>
  )
}

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
