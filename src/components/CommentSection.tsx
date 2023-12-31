import dynamic from "next/dynamic";
import { auth } from "~/server/auth";
import Comment from "~/components/Comment";

const CreateCommentWizard = dynamic(
  () => import("~/components/CreateCommentWizard"),
  { ssr: false },
);
const SignIn = dynamic(() => import("~/components/SigninButton"), {
  ssr: false,
});

interface CommentSectionProps {
  post: string;
}

export default async function CommentSection({ post }: CommentSectionProps) {
  const session = await auth();

  return (
    <div>
      <p className="text-gray-11">Comments</p>
      <div className="mt-2 divide-y divide-gray-7 rounded-md border border-gray-7">
        <Comment post={post} />
        {session?.user?.name && session.user.image ? (
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
