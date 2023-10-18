import Link from "next/link"
import type { VariantProps } from "class-variance-authority"
import { cva } from "class-variance-authority"
import { cn } from "~/lib/utils"
import { Icons } from "~/components/Icons"

const linkStyles = cva(
  "inline-flex items-center gap-1 font-medium transition-colors ease-in focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-gray7",
  {
    variants: {
      intent: {
        highlight: "hover:text-blue10",
      },
      underline: {
        true: "underline decoration-gray7 underline-offset-2  hover:decoration-gray8",
      },
    },
    defaultVariants: {
      intent: "highlight",
    },
  },
)

type LinkProps = React.AnchorHTMLAttributes<HTMLAnchorElement> &
  VariantProps<typeof linkStyles> & {
    href: string
    children: React.ReactNode
    icon?: boolean
    className?: string
  }

export default function CustomLink({
  intent,
  underline,
  href,
  children,
  icon,
  className,
  ...props
}: LinkProps) {
  const isExternalLink = href.startsWith("https")
  return (
    <Link
      href={href}
      target={isExternalLink ? "_blank" : undefined}
      rel={isExternalLink ? "noopener noreferrer" : undefined}
      className={cn(
        linkStyles({ intent, underline }),
        icon && "group",
        className,
      )}
      {...props}
    >
      <span>{children}</span>
      {isExternalLink && icon && <Icons.ExternalLink className="h-4 w-4" />}
      {!isExternalLink && icon && (
        <Icons.ArrowRight className="transition-transform duration-200 ease-in group-hover:translate-x-1" />
      )}
    </Link>
  )
}
