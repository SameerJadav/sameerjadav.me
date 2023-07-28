import Link from "next/link"
import { cn } from "~/lib/utils"
import { Icons } from "~/components/Icons"

interface MyLinkProps {
  title: string
  href: string
  className?: string
  icon?: boolean
}

const isExternal = (href: string) => href.startsWith("https")

export function MyLink({ title, href, className, icon }: MyLinkProps) {
  return isExternal(href) ? (
    <Link
      href={href}
      target="_blank"
      rel="noopener noreferrer"
      className={cn(
        "inline-flex items-center gap-1 underline decoration-slate7 underline-offset-4 transition-colors duration-200 ease-in hover:decoration-slate8",
        className,
      )}
    >
      <span>{title}</span>
      {icon && <Icons.ExternalLink />}
    </Link>
  ) : (
    <Link
      href={href}
      className={cn(
        "inline-flex items-center gap-1 underline decoration-slate7 underline-offset-4 transition-colors duration-200 ease-in hover:decoration-slate8",
        className,
      )}
    >
      {title}
    </Link>
  )
}
