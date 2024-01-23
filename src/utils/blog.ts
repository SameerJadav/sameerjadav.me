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
