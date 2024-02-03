import Image from "next/image";
import Icons from "~/components/Icons";
import { getElapsedTime } from "~/utils/date";

interface CommentProps {
  username: string | null;
  avatar: string | null;
  comment: string;
  createdAt: string;
}

export default function Comment({
  avatar,
  comment,
  createdAt,
  username,
}: CommentProps) {
  return (
    <div className="p-4">
      <div className="flex items-center gap-2">
        {avatar ? (
          <Image
            alt={`${username ?? "someone"}'s github avatar`}
            className="size rounded-full"
            height={32}
            src={avatar}
            width={32}
          />
        ) : (
          <div className="flex size-8 items-center justify-center rounded-full border border-gray-7">
            <Icons.Person className="size-6 rounded-full text-gray-9" />
          </div>
        )}
        <p className="font-medium">
          <span>{username ?? "Someone from the internet"}</span>{" "}
          <span className="font-normal text-gray-11">
            {getElapsedTime(createdAt).long}
          </span>
        </p>
      </div>
      <p className="mt-2">{comment}</p>
    </div>
  );
}
