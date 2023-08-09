import { type Post } from "contentlayer/generated"
import { titleCase } from "title-case"
import { formatDate } from "~/lib/utils"
import CustomLink from "~/components/CustomLink"

interface Props {
  post: Post
}

export default function PostRow({ post }: Props) {
  return (
    <div className="space-y-2 rounded-md border border-gray6 bg-gray2 p-2">
      <CustomLink href={post.slug}>{titleCase(post.title)}</CustomLink>
      <p className="text-gray11">{post.description}</p>
      <p className="font-mono text-gray11">{formatDate(post.publishedAt)}</p>
    </div>
  )
}
