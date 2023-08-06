import { type Post } from "contentlayer/generated"
import { formatDate } from "~/lib/utils"
import CustomLink from "~/components/CustomLink"

interface Props {
  post: Post
}

export default function PostRow({ post }: Props) {
  return (
    <div className="space-y-2 rounded-md border border-slate7 bg-slate3 p-2">
      <CustomLink href={post.slug} title={post.title} />
      <p className="text-slate11">{post.description}</p>
      <p className="font-mono text-slate11">{formatDate(post.publishedAt)}</p>
    </div>
  )
}
