import { defineDocumentType, makeSource } from "contentlayer/source-files"
import rehypeAutolinkHeadings from "rehype-autolink-headings"
import rehypePrettyCode from "rehype-pretty-code"
import { type Options } from "rehype-pretty-code"
import rehypeSlug from "rehype-slug"
import remarkGfm from "remark-gfm"

const rehypePrettyCodeOptions: Options = {
  theme: "one-dark-pro",
  keepBackground: false,
  tokensMap: {
    fn: "entity.name.function",
    objKey: "meta.object-literal.key",
  },
  onVisitLine(element) {
    if (element.children.length === 0) {
      element.children = [{ type: "text", value: " " }]
    }
  },
  /*   onVisitHighlightedLine(element) {
    element.properties.className?.push("line--highlighted")
  }, */
}

export const Post = defineDocumentType(() => ({
  name: "Post",
  contentType: "mdx",
  filePathPattern: `blog/**/*.mdx`,
  fields: {
    title: { type: "string", required: true },
    description: { type: "string", required: true },
    publishedAt: { type: "string", required: true },
  },
  computedFields: {
    slug: {
      type: "string",
      resolve: (doc) => `/${doc._raw.flattenedPath}`,
    },
    slugAsParams: {
      type: "string",
      resolve: (doc) => doc._raw.flattenedPath.split("/").slice(1).join("/"),
    },
  },
}))

export const Notes = defineDocumentType(() => ({
  name: "Notes",
  contentType: "mdx",
  filePathPattern: `notes/**/*.mdx`,
  fields: {
    title: { type: "string", required: true },
    description: { type: "string", required: true },
    publishedAt: { type: "string", required: true },
  },
  computedFields: {
    slug: {
      type: "string",
      resolve: (doc) => `/${doc._raw.flattenedPath}`,
    },
    slugAsParams: {
      type: "string",
      resolve: (doc) => doc._raw.flattenedPath.split("/").slice(1).join("/"),
    },
  },
}))

export default makeSource({
  contentDirPath: "./src/content",
  documentTypes: [Post, Notes],
  mdx: {
    esbuildOptions(options) {
      options.target = "esnext"
      return options
    },
    remarkPlugins: [remarkGfm],
    rehypePlugins: [
      rehypeSlug,
      [rehypePrettyCode, rehypePrettyCodeOptions],
      [
        rehypeAutolinkHeadings,
        {
          properties: {
            className: ["anchor"],
          },
        },
      ],
    ],
  },
})
