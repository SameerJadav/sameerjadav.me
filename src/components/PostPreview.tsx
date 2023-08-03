import { type Post } from "contentlayer/generated"
import { formatDate } from "~/lib/post"
import { MyLink } from "~/components/MyLink"

interface Props {
  post: Post
}

export default function PostPreview({ post }: Props) {
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
