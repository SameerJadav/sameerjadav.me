import dynamic from "next/dynamic";
import { auth } from "~/server/auth";
import Comment from "~/components/Comment";
import Skeleton from "~/components/skeleton";

const CreateCommentWizard = dynamic(
  () => import("~/components/CreateCommentWizard"),
  { ssr: false, loading: () => <Skeleton className="h-[234px] w-full" /> },
);
const SignIn = dynamic(() => import("~/components/SigninButton"), {
  ssr: false,
  loading: () => <Skeleton className="h-[34px] w-[184.94px]" />,
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
