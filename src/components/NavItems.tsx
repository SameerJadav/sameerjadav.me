import Link from "next/link"
import { cn } from "~/lib/utils"

const commonClassName = cn(
  "text-slate11 transition-colors ease-in hover:text-slate12 focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-slate6",
)

const commonActiveClassName = cn(
  "pointer-events-none text-slate12 underline decoration-slate9 underline-offset-8",
)

export const home = (pathname: string) => {
  return (
    <Link
      href="/"
      className={cn(commonClassName, pathname === "/" && commonActiveClassName)}
    >
      Home
    </Link>
  )
}

export const blog = (pathname: string) => {
  return (
    <Link
      href="/blog"
      className={cn(
        commonClassName,
        pathname === "/blog" && commonActiveClassName,
      )}
    >
      Blog
    </Link>
  )
}

export const notes = (pathname: string) => {
  return (
    <Link
      href="/notes"
      className={cn(
        commonClassName,
        pathname === "/notes" && commonActiveClassName,
      )}
    >
      Notes
    </Link>
  )
}
