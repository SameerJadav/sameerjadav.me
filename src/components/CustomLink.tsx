import Link from "next/link"
import { cn } from "~/lib/utils"
import { Icons } from "~/components/Icons"

interface CustomLinkProps {
  children: React.ReactNode
  href: string
  className?: string
  icon?: boolean
  underline?: boolean
}

const isExternal = (href: string) => href.startsWith("https")

export default function CustomLink({
  children,
  href,
  className,
  icon,
  underline,
}: CustomLinkProps) {
  const commonClassName = cn(
    "inline-flex items-center gap-1 transition-colors ease-in hover:text-blue10 focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-gray7",
    underline &&
      "underline decoration-gray7 underline-offset-2 hover:decoration-gray8",
    className,
  )

  if (isExternal(href)) {
    return (
      <Link
        href={href}
        target="_blank"
        rel="noopener noreferrer"
        className={commonClassName}
      >
        <span>{children}</span>
        {icon && <Icons.ExternalLink />}
      </Link>
    )
  }

  return (
    <Link href={href} className={commonClassName}>
      <span>{children}</span>
      {icon && <Icons.ArrowRight />}
    </Link>
  )
}
