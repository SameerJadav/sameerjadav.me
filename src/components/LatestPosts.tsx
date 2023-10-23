import type { Post } from "contentlayer/generated"
import { titleCase } from "title-case"
import CustomLink from "~/components/CustomLink"

interface LatestPostsProps {
  post: Post
}

export default function LatestPosts({ post }: LatestPostsProps) {
  return (
    <div className="group flex justify-between">
      <CustomLink href={post.slug} className="text-balance flex-1">
        {titleCase(post.title)}
      </CustomLink>
      <p className="shrink-0 text-gray11 transition-colors duration-200 ease-in group-hover:text-gray12">
        {post.publishedAt}
      </p>
    </div>
  )
}
