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
  const commonClassName = cn(
    "inline-flex items-center gap-1 underline decoration-slate7 underline-offset-4 transition-colors ease-in hover:decoration-slate8 focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-slate6",
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
        <span>{title}</span>
        {icon && <Icons.ExternalLink />}
      </Link>
    )
  }

  return (
    <Link href={href} className={commonClassName}>
      {title}
    </Link>
  )
}
