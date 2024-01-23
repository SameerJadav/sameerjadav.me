/* eslint-disable no-console */
import { db } from "~/server/db";
import { comments } from "~/server/db/schema";

interface CommentSchema {
  post: string;
  username: string | null | undefined;
  avatar: string | null | undefined;
  comment: string;
}

export async function POST(req: Request) {
  try {
    const { username, avatar, post, comment } =
      (await req.json()) as CommentSchema;

    const result = await db.insert(comments).values({
      username,
      avatar,
      post,
      comment,
    });

    return Response.json(result);
  } catch (e) {
    console.error(e);
    return Response.error();
  }
}
