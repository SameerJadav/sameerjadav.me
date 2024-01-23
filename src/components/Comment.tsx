import Image from "next/image";
import Icons from "~/components/Icons";

interface CommentProps {
  username: string | null;
  avatar: string | null;
  comment: string;
  createdAt: string;
}

function getElapsedTime(dateString: string): string {
  const MS_PER_DAY = 1000 * 60 * 60 * 24;
  const MS_PER_MONTH = MS_PER_DAY * 30;
  const MS_PER_YEAR = MS_PER_DAY * 365;

  const currentTime = Date.now();
  const inputTime = new Date(dateString).getTime();
  const timeDifference = currentTime - inputTime;

  const yearsElapsed = Math.floor(timeDifference / MS_PER_YEAR);
  const monthsElapsed = Math.floor(timeDifference / MS_PER_MONTH);
  const daysElapsed = Math.floor(timeDifference / MS_PER_DAY);

  switch (true) {
    case yearsElapsed >= 1:
      return yearsElapsed === 1 ? "1 year ago" : `${yearsElapsed} years ago`;
    case monthsElapsed >= 1:
      return monthsElapsed === 1
        ? "1 month ago"
        : `${monthsElapsed} months ago`;
    case daysElapsed >= 1:
      return `${daysElapsed} days ago`;
    default:
      return "Today";
  }
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
            alt={`${username}'s github avatar`}
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
          {username || "Someone from the internet"}{" "}
          <span className="font-normal text-gray-11">
            {getElapsedTime(createdAt)}
          </span>
        </p>
      </div>
      <p className="mt-2">{comment}</p>
    </div>
  );
}
