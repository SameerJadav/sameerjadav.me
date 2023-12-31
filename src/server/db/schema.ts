import { sql } from "drizzle-orm";
import { integer, sqliteTableCreator, text } from "drizzle-orm/sqlite-core";

/**
 * Using the multi-project schema feature of Drizzle ORM. Use the same database instance for multiple projects.
 *
 * @see https://orm.drizzle.team/docs/goodies#multi-project-schema
 */
const mysqliteTable = sqliteTableCreator((name) => `mywebsite_${name}`);

export const comments = mysqliteTable("comments", {
  id: integer("id", { mode: "number" })
    .primaryKey({ autoIncrement: true })
    .notNull(),
  post: text("post").notNull(),
  username: text("username"),
  avatar: text("avatar"),
  comment: text("comment").notNull(),
  createdAt: text("created_at")
    .default(sql`CURRENT_DATE`)
    .notNull(),
});
