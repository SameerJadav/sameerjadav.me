import { Suspense } from "react";
import dynamic from "next/dynamic";
import { asc, eq } from "drizzle-orm";
import type { Session } from "next-auth";
import { db } from "~/server/db";
import { comments } from "~/server/db/schema";
import Comment from "~/components/Comment";
import Skeleton from "~/components/skeleton";

interface Comment {
  id: number;
  post: string;
  username: string | null;
  avatar: string | null;
  comment: string;
  createdAt: string;
}

interface CommentSectionProps {
  post: string;
  session: Session | null;
}

const CreateCommentWizard = dynamic(
  () => import("~/components/CreateCommentWizard"),
  {
    ssr: false,
    loading: () => <Skeleton className="h-[234px] w-full rounded-b-md" />,
  },
);

const SignIn = dynamic(() => import("~/components/SigninButton"), {
  ssr: false,
  loading: () => <Skeleton className="h-[34px] w-[184.94px] rounded-md" />,
});

async function getPostComments(post: string): Promise<Comment[] | undefined> {
  try {
    const postComments = await db.query.comments.findMany({
      orderBy: [asc(comments.createdAt)],
      where: eq(comments.post, post),
    });
    return postComments;
  } catch (e) {
    // eslint-disable-next-line no-console
    console.error(e);
  }
}

export default async function CommentSection({
  post,
  session,
}: CommentSectionProps) {
  const postComments = await getPostComments(post);

  return (
    <div>
      <p className="text-gray-11">Comments ({postComments?.length})</p>
      <div className="mt-2 divide-y divide-gray-7 rounded-md border border-gray-7">
        <Suspense
          fallback={
            <div className="p-4">
              <p>Loading comments...</p>
            </div>
          }
        >
          {postComments?.map(({ username, avatar, comment, id, createdAt }) => (
            <Comment
              avatar={avatar}
              comment={comment}
              createdAt={createdAt}
              key={id}
              username={username}
            />
          ))}
        </Suspense>
        {session?.user ? (
          <CreateCommentWizard
            avatar={session.user.image}
            post={post}
            username={session.user.name}
          />
        ) : (
          <div className="p-4">
            <SignIn />
          </div>
        )}
      </div>
    </div>
  );
}
