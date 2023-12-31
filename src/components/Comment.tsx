"use client";

import Image from "next/image";
import { useQuery } from "@tanstack/react-query";

interface CommentProps {
  post: string;
}

interface Comment {
  post: string;
  username: string;
  avatar: string;
  comment: string;
  id: number;
  createdAt: string;
}

function getElapsedTime(dateString: string) {
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

async function fetchComments() {
  try {
    const res = await fetch("/api/comments");
    if (!res.ok) throw new Error("Network response was not ok");
    const allComments = (await res.json()) as Comment[];
    return allComments;
  } catch (e) {
    // eslint-disable-next-line no-console
    console.error("There has been a problem with your fetch operation: ", e);
  }
}

export default function Comment({ post }: CommentProps) {
  const { data } = useQuery({
    queryKey: ["comments"],
    queryFn: fetchComments,
  });

  const filteredComments = data?.filter((comment) => comment.post === post);

  return filteredComments?.map(
    ({ username, avatar, comment, id, createdAt }) => (
      <div className="p-4" key={id}>
        <div className="flex items-center gap-2">
          <Image
            alt={`${username}'s github avatar`}
            className="size rounded-full"
            height={32}
            src={avatar}
            width={32}
          />
          <p className="font-medium">{username}</p>
          <p className="text-gray-11">{getElapsedTime(createdAt)}</p>
        </div>
        <p className="mt-2">{comment}</p>
      </div>
    ),
  );
}
