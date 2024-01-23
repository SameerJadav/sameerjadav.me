/* eslint-disable @typescript-eslint/ban-ts-comment */
import type { ComponentPropsWithoutRef } from "react";
import { MDXRemote } from "next-mdx-remote/rsc";
import type { Options } from "rehype-pretty-code";
import rehypePrettyCode from "rehype-pretty-code";
import { Anchor } from "~/components/Anchor";

interface CalloutProps {
  emoji: string;
  children: React.ReactNode;
}

const rehypePrettyCodeOptions: Options = {
  theme: "one-dark-pro",
  keepBackground: false,
  tokensMap: {
    // VScode command palette: Inspect Editor Tokens and Scopes
    // https://github.com/Binaryify/OneDark-Pro/blob/47c66a2f2d3e5c85490e1aaad96f5fab3293b091/themes/OneDark-Pro.json
    fn: "entity.name.function",
    objKey: "meta.object-literal.key",
  },
};

function Callout({ emoji, children }: CalloutProps) {
  return (
    <div className="mt-4 flex items-center gap-2 rounded-md border border-gray-6 bg-gray-2 p-2">
      <p>{emoji}</p>
      <div className="*:m-0">{children}</div>
    </div>
  );
}

const components = {
  h2: ({ ...props }: ComponentPropsWithoutRef<"h2">) => (
    // eslint-disable-next-line jsx-a11y/heading-has-content
    <h2 className="mt-6 scroll-m-6 text-xl font-semibold" {...props} />
  ),
  p: ({ ...props }: ComponentPropsWithoutRef<"p">) => (
    <p className="mt-4 leading-7" {...props} />
  ),
  strong: ({ ...props }: ComponentPropsWithoutRef<"strong">) => (
    <strong className="font-bold" {...props} />
  ),
  a: ({ ...props }: ComponentPropsWithoutRef<"a">) => (
    // @ts-expect-error
    <Anchor highlight underline url={props.href} {...props} />
  ),
  ul: ({ ...props }: ComponentPropsWithoutRef<"ul">) => (
    <ul className="ml-6 mt-4 list-disc" {...props} />
  ),
  ol: ({ ...props }: ComponentPropsWithoutRef<"ol">) => (
    <ol className="ml-6 mt-4 list-decimal" {...props} />
  ),
  li: ({ ...props }: ComponentPropsWithoutRef<"li">) => (
    <li className="my-2" {...props} />
  ),
  blockquote: ({ ...props }: ComponentPropsWithoutRef<"blockquote">) => (
    <blockquote
      className="mt-4 border-l-2 border-gray-6 pl-6 italic text-gray-11"
      {...props}
    />
  ),
  hr: ({ ...props }: ComponentPropsWithoutRef<"hr">) => (
    <hr className="my-6 border-gray-6" {...props} />
  ),
  code: ({ ...props }: ComponentPropsWithoutRef<"code">) => (
    <code
      className="rounded-sm border border-gray-6 bg-gray-3 px-1 py-0.5 font-mono text-sm"
      {...props}
    />
  ),
  Callout,
};

interface MDXProps {
  source: string;
}

export default function Mdx({ source }: MDXProps) {
  return (
    <MDXRemote
      components={components}
      options={{
        mdxOptions: {
          // @ts-expect-error
          rehypePlugins: [[rehypePrettyCode, rehypePrettyCodeOptions]],
        },
      }}
      source={source}
    />
  );
}
