import Link from "next/link"
import { RoughNotation } from "react-rough-notation"
import { cn } from "~/lib/utils"

const commonClassName = cn(
  "text-slate11 transition-colors ease-in hover:text-slate12 focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-slate6",
)

export const home = (pathname: string) => {
  return pathname === "/" ? (
    <RoughNotation type="underline" animate color="#4c5155" show padding={6}>
      <span className="font-medium">Home</span>
    </RoughNotation>
  ) : (
    <Link href="/" className={commonClassName}>
      Home
    </Link>
  )
}

export const blog = (pathname: string) => {
  return pathname === "/blog" ? (
    <RoughNotation type="underline" animate color="#4c5155" show padding={6}>
      <span className="font-medium">Blog</span>
    </RoughNotation>
  ) : (
    <Link href="/blog" className={commonClassName}>
      Blog
    </Link>
  )
}

export const notes = (pathname: string) => {
  return pathname === "/notes" ? (
    <RoughNotation type="underline" animate color="#4c5155" show padding={6}>
      <span className="font-medium">Notes</span>
    </RoughNotation>
  ) : (
    <Link href="/notes" className={commonClassName}>
      Notes
    </Link>
  )
}
