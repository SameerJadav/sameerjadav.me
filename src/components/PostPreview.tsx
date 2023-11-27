import Anchor from "~/components/Anchor";
import type { Post } from "~/utils/blog";
import { formatDate } from "~/utils/blog";

interface PostPreviewProps {
  post: Post;
}

export default function PostPreview({ post }: PostPreviewProps) {
  return (
    <div className="space-y-2">
      <Anchor className="text-lg" href={post.slug} underline>
        {post.metadata.title}
      </Anchor>
      <p className="text-gray11">{post.metadata.description}</p>
      <p className="text-gray11 font-mono">{formatDate(post.metadata.date)}</p>
    </div>
  );
}
