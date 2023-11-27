import type { ComponentPropsWithoutRef } from "react";
import Link from "next/link";
import type { VariantProps } from "class-variance-authority";
import { cva } from "class-variance-authority";
import { cn } from "~/utils/cn";

const AnchorStyles = cva(
  "inline-flex items-center gap-2 font-medium focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-gray-7",
  {
    variants: {
      intent: {
        highlight: "hover:text-blue-10",
      },
      underline: {
        true: "underline decoration-gray-7 underline-offset-2  hover:decoration-gray-8",
      },
    },
    defaultVariants: {
      intent: "highlight",
    },
  },
);

interface AnchorProps
  extends ComponentPropsWithoutRef<"a">,
    VariantProps<typeof AnchorStyles> {
  href: string;
  children: React.ReactNode;
  className?: string;
}

export default function Anchor({
  href,
  children,
  className,
  intent,
  underline,
  ...rest
}: AnchorProps) {
  const isExternalLink = href.startsWith("https") || href.startsWith("mailto");

  return (
    <Link
      className={cn(AnchorStyles({ intent, underline }), className)}
      href={href}
      rel={isExternalLink ? "noopener noreferrer" : undefined}
      target={isExternalLink ? "_blank" : undefined}
      {...rest}
    >
      {children}
    </Link>
  );
}
