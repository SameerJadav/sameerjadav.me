/* eslint-disable no-console */
import { asc } from "drizzle-orm";
import { db } from "~/server/db";
import { comments } from "~/server/db/schema";

interface CommentSchema {
  post: string;
  username: string;
  avatar: string;
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

export async function GET() {
  try {
    const allComments = await db.query.comments.findMany({
      orderBy: [asc(comments.createdAt)],
    });
    return Response.json(allComments);
  } catch (e) {
    console.error(e);
    return Response.error();
  }
}
