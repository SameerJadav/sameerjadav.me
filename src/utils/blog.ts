/* eslint-disable unicorn/prefer-node-protocol -- webpack was throwing an error */
import fs from "fs/promises";
import matter from "gray-matter";
import path from "path";

interface Metadata {
  title: string;
  description: string;
  date: string;
}

export interface Post {
  metadata: Metadata;
  content: string;
  slug: string;
  slugAsParams: string;
}

const CONTENT_DIR = path.join(process.cwd(), "src/content/blogs");

async function getMdxFiles() {
  const files = await fs.readdir(CONTENT_DIR);
  const mdxFiles = files.filter((file) => path.extname(file) === ".mdx");
  return mdxFiles;
}

async function getBlogPosts(): Promise<Post[]> {
  const mdxFiles = await getMdxFiles();
  const mdxData = await Promise.all(
    mdxFiles.map(async (file) => {
      const filePath = path.join(CONTENT_DIR, file);
      const fileContent = await fs.readFile(filePath, "utf-8");
      const parsedMatter = matter(fileContent);
      const metadata = parsedMatter.data as Metadata;
      const content = parsedMatter.content;
      const slug = `/blogs/${path.basename(file, path.extname(file))}`;
      const slugAsParams = path.basename(file, path.extname(file));
      return {
        metadata,
        content,
        slug,
        slugAsParams,
      };
    }),
  );
  return mdxData;
}

export const allPosts = await getBlogPosts();

export const sortedPosts = allPosts
  .slice()
  .sort(
    (a, b) =>
      new Date(b.metadata.date).getTime() - new Date(a.metadata.date).getTime(),
  );

export const formatDate = (dateString: string) => {
  const MS_PER_DAY = 1000 * 60 * 60 * 24;
  const currentDate = Date.now();
  const postDate = new Date(dateString).getTime();
  const timeDiff = currentDate - postDate;
  const daysAgo = Math.floor(timeDiff / MS_PER_DAY);

  let formattedDate = "Today";
  if (daysAgo >= 365) formattedDate = `${Math.floor(daysAgo / 365)}y ago`;
  else if (daysAgo >= 30) formattedDate = `${Math.floor(daysAgo / 30)}mo ago`;
  else if (daysAgo > 0) formattedDate = `${daysAgo}d ago`;

  const fullDate = new Date(postDate).toLocaleDateString("en-us", {
    month: "long",
    day: "numeric",
    year: "numeric",
  });

  return `${fullDate} (${formattedDate})`;
};
