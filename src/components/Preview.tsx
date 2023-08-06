import type { Post, Notes } from "contentlayer/generated"
import { formatDate } from "~/lib/utils"
import { MyLink } from "~/components/MyLink"

interface Props {
  post: Post | Notes
}

export default function Preview({ post }: Props) {
  return (
    <div className="space-y-2">
      <MyLink
        href={post.slug}
        title={post.title}
        className="text-lg font-medium"
      />
      <p className="text-slate11">{post.description}</p>
      <p className="font-mono text-slate11">{formatDate(post.publishedAt)}</p>
    </div>
  )
}
