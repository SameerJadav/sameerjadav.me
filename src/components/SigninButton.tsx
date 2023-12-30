"use client";

import { signIn } from "next-auth/react";
import Icons from "~/components/Icons";

export default function SignIn() {
  return (
    <button
      className="flex max-w-max items-center gap-2 rounded-md border border-gray-7 bg-gray-3 px-2 py-1 font-medium hover:border-gray-8"
      onClick={() => void signIn("github")}
    >
      <Icons.Github className="size-5" />
      Sign in with Github
    </button>
  );
}
