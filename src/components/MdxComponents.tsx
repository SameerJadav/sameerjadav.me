import Link from "next/link"
import { useMDXComponent } from "next-contentlayer/hooks"
import { cn } from "~/lib/utils"

const components = {
  h2: ({ className, ...props }: React.HTMLAttributes<HTMLHeadingElement>) => (
    <h2
      className={cn("mt-6 scroll-m-6 text-xl font-semibold", className)}
      {...props}
    />
  ),
  p: ({ className, ...props }: React.HTMLAttributes<HTMLParagraphElement>) => (
    <p className={cn("mt-4 leading-7", className)} {...props} />
  ),
  a: ({ className, ...props }: React.HTMLAttributes<HTMLAnchorElement>) => {
    // eslint-disable-next-line @typescript-eslint/ban-ts-comment
    // @ts-ignore
    // eslint-disable-next-line @typescript-eslint/no-unsafe-assignment, @typescript-eslint/no-unsafe-member-access, @typescript-eslint/no-unsafe-call
    const isExternal = props.href?.startsWith("https")
    return isExternal ? (
      <a
        className={cn(
          "underline decoration-slate7 underline-offset-4 transition-colors duration-200 ease-in hover:decoration-slate8 focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-slate6",
          className,
        )}
        target="_blank"
        rel="noopener noreferrer"
        {...props}
      />
    ) : (
      <Link
        // eslint-disable-next-line @typescript-eslint/ban-ts-comment
        // @ts-ignore
        // eslint-disable-next-line @typescript-eslint/no-unsafe-assignment
        href={props.href}
        className={cn(
          "underline decoration-slate7 underline-offset-4 transition-colors duration-200 ease-in hover:decoration-slate8 focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-slate6",
          className,
        )}
        {...props}
      />
    )
  },
  ul: ({ className, ...props }: React.HTMLAttributes<HTMLUListElement>) => (
    <ul className={cn("ml-6 mt-4 list-disc", className)} {...props} />
  ),
  ol: ({ className, ...props }: React.HTMLAttributes<HTMLOListElement>) => (
    <ol className={cn("ml-6 mt-4 list-decimal", className)} {...props} />
  ),
  li: ({ className, ...props }: React.HTMLAttributes<HTMLElement>) => (
    <li className={cn("my-2", className)} {...props} />
  ),
  blockquote: ({ className, ...props }: React.HTMLAttributes<HTMLElement>) => (
    <blockquote
      className={cn(
        "mt-4 border-l-2 border-slate6 pl-6 italic text-slate11",
        className,
      )}
      {...props}
    />
  ),
  hr: ({ ...props }: React.HTMLAttributes<HTMLHRElement>) => (
    <hr className="my-6 border-slate6" {...props} />
  ),
  pre: ({ className, ...props }: React.HTMLAttributes<HTMLElement>) => (
    <pre
      className={cn(
        "mt-4 overflow-x-auto rounded-md bg-slate3 px-4 py-2 font-mono",
        className,
      )}
      {...props}
    />
  ),
  code: ({ className, ...props }: React.HTMLAttributes<HTMLHRElement>) => (
    <code
      className={cn(
        "rounded bg-slate3 px-1 py-0.5 font-mono text-sm",
        className,
      )}
      {...props}
    />
  ),
  table: ({ className, ...props }: React.HTMLAttributes<HTMLTableElement>) => (
    <div className="mt-4 w-full overflow-y-auto">
      <table className={cn("w-full", className)} {...props} />
    </div>
  ),
  tr: ({ className, ...props }: React.HTMLAttributes<HTMLTableRowElement>) => (
    <tr
      className={cn("m-0 border-t p-0 even:bg-slate3", className)}
      {...props}
    />
  ),
  th: ({ className, ...props }: React.HTMLAttributes<HTMLTableCellElement>) => (
    <th
      className={cn(
        "border px-4 py-2 text-left font-medium [&[align=center]]:text-center [&[align=right]]:text-right",
        className,
      )}
      {...props}
    />
  ),
  td: ({ className, ...props }: React.HTMLAttributes<HTMLTableCellElement>) => (
    <td
      className={cn(
        "border px-4 py-2 text-left [&[align=center]]:text-center [&[align=right]]:text-right",
        className,
      )}
      {...props}
    />
  ),
}

interface MdxProps {
  code: string
}

export function Mdx({ code }: MdxProps) {
  const Component = useMDXComponent(code)

  return <Component components={components} />
}
