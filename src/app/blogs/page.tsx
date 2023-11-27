import type { Metadata } from "next";
import H1 from "~/components/H1";
import PostPreview from "~/components/PostPreview";
import { SITE } from "~/config";
import { sortedPosts } from "~/utils/blog";

const title = "Blogs";
const description = "Sameer Jadav's blogs";
const image = `${SITE.image}/og?title=${title}`;

export const metadata: Metadata = {
  title,
  description,
  openGraph: {
    title,
    description,
    url: "/blogs",
    images: [
      {
        url: image,
        width: 1200,
        height: 630,
        alt: title,
      },
    ],
  },
  twitter: {
    title,
    description,
    images: [image],
  },
  alternates: { canonical: "/blogs" },
};

export default function BlogsPage() {
  return (
    <main>
      <H1 lable="Blogs" />
      <div className="mt-6 space-y-4">
        {sortedPosts.map((post) => (
          <PostPreview key={post.slug} post={post} />
        ))}
      </div>
    </main>
  );
}
