import { useMDXComponent } from "next-contentlayer/hooks"
import { cn } from "~/lib/utils"
import CustomLink from "~/components/CustomLink"

interface CalloutProps {
  emoji: string
  children: React.ReactNode
}

function callout({ emoji, children }: CalloutProps) {
  return (
    <div className="mt-4 flex items-center gap-2 rounded-md border border-gray6 bg-gray2 p-2">
      <p>{emoji}</p>
      <p>{children}</p>
    </div>
  )
}

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
  strong: ({
    className,
    ...props
  }: React.HTMLAttributes<HTMLParagraphElement>) => (
    <strong className={cn("font-semibold", className)} {...props} />
  ),
  a: ({ ...props }: React.HTMLAttributes<HTMLAnchorElement>) => (
    // eslint-disable-next-line @typescript-eslint/ban-ts-comment
    // @ts-ignore
    // eslint-disable-next-line @typescript-eslint/no-unsafe-assignment
    <CustomLink href={props.href} underline {...props} />
  ),
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
        "mt-4 border-l-2 border-gray6 pl-6 italic text-gray11",
        className,
      )}
      {...props}
    />
  ),
  hr: ({ ...props }: React.HTMLAttributes<HTMLHRElement>) => (
    <hr className="my-6 border-gray6" {...props} />
  ),
  pre: ({ className, ...props }: React.HTMLAttributes<HTMLElement>) => (
    <pre
      className={cn(
        "mt-4 overflow-x-auto rounded-md border border-gray6 bg-gray2 px-4 py-2 font-mono",
        className,
      )}
      {...props}
    />
  ),
  code: ({ className, ...props }: React.HTMLAttributes<HTMLHRElement>) => (
    <code
      className={cn("bg-gray3 px-1 py-0.5 font-mono text-sm", className)}
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
      className={cn("m-0 border-t border-gray6 p-0 even:bg-gray2", className)}
      {...props}
    />
  ),
  th: ({ className, ...props }: React.HTMLAttributes<HTMLTableCellElement>) => (
    <th
      className={cn(
        "border border-gray6 px-4 py-2 text-left font-medium [&[align=center]]:text-center [&[align=right]]:text-right",
        className,
      )}
      {...props}
    />
  ),
  td: ({ className, ...props }: React.HTMLAttributes<HTMLTableCellElement>) => (
    <td
      className={cn(
        "border border-gray6 px-4 py-2 text-left [&[align=center]]:text-center [&[align=right]]:text-right",
        className,
      )}
      {...props}
    />
  ),
  Callout: callout,
}

interface MdxProps {
  code: string
}

export function Mdx({ code }: MdxProps) {
  const Component = useMDXComponent(code)

  return <Component components={components} />
}
