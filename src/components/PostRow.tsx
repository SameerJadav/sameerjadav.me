import { type Post } from "contentlayer/generated"
import { formatDate } from "~/lib/utils"
import { MyLink } from "~/components/MyLink"

interface Props {
  post: Post
}

export default function PostRow({ post }: Props) {
  return (
    <div className="space-y-2 rounded-md border border-slate7 bg-slate3 p-2">
      <MyLink href={post.slug} title={post.title} />
      <p className="text-slate11">{post.description}</p>
      <p className="font-mono text-slate11">{formatDate(post.publishedAt)}</p>
    </div>
  )
}
