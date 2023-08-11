import { type Post } from "contentlayer/generated"
import { Balancer } from "react-wrap-balancer"
import { titleCase } from "title-case"
import CustomLink from "~/components/CustomLink"

interface LatestPostsProps {
  post: Post
}

export default function LatestPosts({ post }: LatestPostsProps) {
  return (
    <div className="group flex justify-between">
      <CustomLink href={post.slug} className="flex-1">
        <Balancer>{titleCase(post.title)}</Balancer>
      </CustomLink>
      <p className="shrink-0 text-gray11 transition-colors ease-in group-hover:text-gray12">
        {post.publishedAt}
      </p>
    </div>
  )
}
