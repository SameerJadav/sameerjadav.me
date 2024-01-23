import type { ComponentPropsWithoutRef } from "react";
import Link from "next/link";
import { cn } from "~/utils/cn";

interface LinkProps extends ComponentPropsWithoutRef<"a"> {
  url: string;
  children: React.ReactNode;
  className?: string;
  highlight?: boolean;
  underline?: boolean;
}

export function ExternalLink({
  url,
  children,
  highlight,
  underline,
  className,
}: LinkProps) {
  return (
    <a
      className={cn(
        "inline-flex items-center gap-2 font-medium focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-gray-7",
        highlight && "hover:text-blue-10",
        underline &&
          "underline decoration-gray-7 underline-offset-2  hover:decoration-gray-8",
        className,
      )}
      href={url}
      rel="noopener noreferrer"
      target="_blank"
    >
      {children}
    </a>
  );
}

export function InternalLink({
  url,
  children,
  highlight,
  underline,
  className,
}: LinkProps) {
  return (
    <Link
      className={cn(
        "inline-flex items-center gap-2 font-medium focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-gray-7",
        highlight && "hover:text-blue-10",
        underline &&
          "underline decoration-gray-7 underline-offset-2  hover:decoration-gray-8",
        className,
      )}
      href={url}
    >
      {children}
    </Link>
  );
}

export function Anchor({
  url,
  children,
  underline,
  highlight,
  className,
}: LinkProps) {
  const isExternalLink = url.startsWith("https") || url.startsWith("mailto");

  return isExternalLink ? (
    <ExternalLink
      className={className}
      highlight={highlight}
      underline={underline}
      url={url}
    >
      {children}
    </ExternalLink>
  ) : (
    <InternalLink
      className={className}
      highlight={highlight}
      underline={underline}
      url={url}
    >
      {children}
    </InternalLink>
  );
}
