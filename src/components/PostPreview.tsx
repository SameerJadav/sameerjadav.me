import { InternalLink } from "~/components/Anchor";
import type { Post } from "~/utils/blog";
import { getElapsedTime } from "~/utils/date";

interface PostPreviewProps {
  post: Post;
}

export default function PostPreview({ post }: PostPreviewProps) {
  const fulldate = new Date(post.metadata.date).toLocaleDateString("en-us", {
    month: "long",
    day: "numeric",
    year: "numeric",
  });

  const elapsedTime = getElapsedTime(post.metadata.date).short;

  const date = `${fulldate} (${elapsedTime})`;

  return (
    <div className="space-y-2">
      <InternalLink className="text-lg" highlight underline url={post.slug}>
        {post.metadata.title}
      </InternalLink>
      <p className="text-gray11">{post.metadata.description}</p>
      <p className="text-gray11 font-mono">{date}</p>
    </div>
  );
}
