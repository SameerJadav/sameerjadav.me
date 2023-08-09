import Link from "next/link"
import { cn } from "~/lib/utils"

const commonClassName = cn(
  "text-gray11 transition-colors ease-in hover:text-gray12 focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-gray7",
)

const commonActiveClassName = cn(
  "pointer-events-none text-gray12 underline decoration-gray8 underline-offset-8",
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
