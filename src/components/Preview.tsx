import type { Post, Notes } from "contentlayer/generated"
import { formatDate } from "~/lib/utils"
import CustomLink from "~/components/CustomLink"

interface Props {
  post: Post | Notes
}

export default function Preview({ post }: Props) {
  return (
    <div className="space-y-2">
      <CustomLink
        href={post.slug}
        title={post.title}
        className="text-lg font-medium"
      />
      <p className="text-gray11">{post.description}</p>
      <p className="font-mono text-gray11">{formatDate(post.publishedAt)}</p>
    </div>
  )
}
