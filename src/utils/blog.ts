/* eslint-disable unicorn/prefer-node-protocol -- webpack was throwing an error */
import fs from "fs/promises";
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

function parseFrontmatter(fileContent: string) {
  const frontmatterPattern = /---\s*(?<frontmatter>[\s\S]*?)\s*---/;
  const match = frontmatterPattern.exec(fileContent);

  // eslint-disable-next-line @typescript-eslint/prefer-optional-chain -- explicit checks are more readable and clear to me
  if (!match || !match.groups || !match.groups.frontmatter) {
    throw new Error("Front matter not found in the file content");
  }

  const frontmatterBlock = match.groups.frontmatter;
  const contentWithoutFrontMatter = fileContent
    .replace(frontmatterPattern, "")
    .trim();
  const frontMatterLines = frontmatterBlock.trim().split("\n");
  const metadata: Partial<Metadata> = {};

  for (const line of frontMatterLines) {
    const [key, ...valueArr] = line.split(": ");

    if (key) {
      const value = valueArr
        .join(": ")
        .trim()
        .replace(/^['"](?:.*)['"]$/, "$1"); // Remove quotes; usign non-capturing group
      metadata[key.trim() as keyof Metadata] = value;
    }
  }

  if (!metadata.title || !metadata.description || !metadata.date) {
    throw new Error("Metadata must contain title, description, and date");
  }

  return { metadata: metadata as Metadata, content: contentWithoutFrontMatter };
}

async function getMDXFiles(dir: string) {
  const filesInDirectory = await fs.readdir(dir);
  const mdxFiles = filesInDirectory.filter(
    (file) => path.extname(file) === ".mdx",
  );
  return mdxFiles;
}

async function readAndParseMDXFile(filePath: string) {
  const fileContent = await fs.readFile(filePath, "utf-8");
  const metadata = parseFrontmatter(fileContent);
  return metadata;
}

async function getMDXData(dir: string) {
  const mdxFiles = await getMDXFiles(dir);
  const mdxDataPromises = mdxFiles.map(async (file) => {
    const filePath = path.join(dir, file);
    const { metadata, content } = await readAndParseMDXFile(filePath);
    const slug = `blogs/${path.basename(file, path.extname(file))}`;
    const slugAsParams = path.basename(file, path.extname(file));
    return {
      metadata,
      content,
      slug,
      slugAsParams,
    };
  });
  const mdxData = await Promise.all(mdxDataPromises);
  return mdxData;
}

export async function getBlogPosts(): Promise<Post[]> {
  const contentDirectory = path.join(process.cwd(), "src/content/blogs");
  const blogPosts = await getMDXData(contentDirectory);
  return blogPosts;
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
