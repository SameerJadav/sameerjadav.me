import type { Post } from "contentlayer/generated"
import { titleCase } from "title-case"
import { formatDate } from "~/lib/utils"
import CustomLink from "~/components/CustomLink"

interface ContentPreviewProps {
  content: Post
}

export default function ContentPreview({ content }: ContentPreviewProps) {
  return (
    <div className="space-y-2">
      <CustomLink href={content.slug} underline className="text-lg">
        {titleCase(content.title)}
      </CustomLink>
      <p className="text-gray11">{content.description}</p>
      <p className="font-mono text-gray11">{formatDate(content.publishedAt)}</p>
    </div>
  )
}
