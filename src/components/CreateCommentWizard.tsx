"use client";

import Image from "next/image";
import { signOut } from "next-auth/react";

interface CreateCommentWizardProps {
  username: string;
  avatar: string;
}

export default function CreateCommentWizard({
  username,
  avatar,
}: CreateCommentWizardProps) {
  return (
    <div className="space-y-2 p-4">
      <div className="flex items-center gap-2">
        <Image
          alt={`${username}'s github avatar`}
          className="size rounded-full"
          height={32}
          src={avatar}
          width={32}
        />
        <p className="font-medium">{username}</p>
      </div>
      <textarea
        className="w-full rounded-md border border-gray-7 bg-gray-3 p-2 placeholder:text-gray-10 hover:border-gray-8 focus:border-gray-8 focus:outline-none"
        placeholder="Add your comment here..."
        rows={4}
        // onChange={(e) => {
        //   setContent(e.target.value);
        // }}
        // value={content}
      />
      <div className="flex items-center justify-end gap-2">
        <button
          className="text-gray-11 hover:text-gray-12"
          onClick={() => void signOut()}
        >
          Sign out
        </button>
        <button
          className="rounded-md bg-gray-12 px-2 py-1 text-gray-1 hover:bg-white hover:text-black disabled:bg-gray-11"
          // disabled={status === "pending"}
          // onClick={handleClick}
        >
          Add Comment
        </button>
      </div>
    </div>
  );
}
