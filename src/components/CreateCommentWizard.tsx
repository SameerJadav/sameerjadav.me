"use client";

import { useState } from "react";
import Image from "next/image";
import { useMutation, useQueryClient } from "@tanstack/react-query";
import { signOut } from "next-auth/react";
import Icons from "~/components/Icons";
import type { EventFor } from "~/utils/react";

interface CreateCommentWizardProps {
  username: string | null | undefined;
  avatar: string | null | undefined;
  post: string;
}

export default function CreateCommentWizard({
  username,
  avatar,
  post,
}: CreateCommentWizardProps) {
  const [content, setContent] = useState("");

  const queryClient = useQueryClient();

  const { mutate, status } = useMutation({
    mutationFn: () =>
      fetch("/api/comments", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          username,
          avatar,
          post,
          comment: content.trim(),
        }),
      }),
    onSuccess: async () => {
      await queryClient.refetchQueries({ queryKey: ["comments"] });
      setContent("");
    },
  });

  const handleClick = (e: EventFor<"button", "onClick">) => {
    e.preventDefault();
    if (content.trim() !== "") mutate();
  };

  const handleKeyDown = (e: EventFor<"textarea", "onKeyDown">) => {
    if (e.ctrlKey && e.key === "Enter") {
      e.preventDefault();
      if (content.trim() !== "") mutate();
    }
  };

  return (
    <div className="space-y-2 p-4">
      <div className="flex items-center gap-2">
        {avatar ? (
          <Image
            alt="Github avatar"
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
        <p className="font-medium">{username || "Some guy"}</p>
      </div>
      <textarea
        className="w-full rounded-md border border-gray-7 bg-gray-3 p-2 placeholder:text-gray-10 hover:border-gray-8 focus:border-gray-8 focus:outline-none"
        disabled={status === "pending"}
        onChange={(e) => {
          setContent(e.target.value);
        }}
        onKeyDown={handleKeyDown}
        placeholder="Add your comment here..."
        rows={4}
        value={content}
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
          disabled={status === "pending" || content.trim() === ""}
          onClick={handleClick}
        >
          Add Comment
        </button>
      </div>
    </div>
  );
}
