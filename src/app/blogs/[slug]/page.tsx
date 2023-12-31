import type { Metadata } from "next";
import { notFound } from "next/navigation";
import Anchor from "~/components/Anchor";
import CommentSection from "~/components/CommentSection";
import Mdx from "~/components/Mdx";
import { SITE } from "~/config";
import { allPosts, formatDate } from "~/utils/blog";

interface PostPageProps {
  params: {
    slug: string;
  };
}

export function generateStaticParams() {
  const staticParams = allPosts.map((post) => ({
    slug: post.slugAsParams,
  }));
  return staticParams;
}

function getPostFromParams({ params }: PostPageProps) {
  const foundPost = allPosts.find((post) => post.slugAsParams === params.slug);
  if (!foundPost) return null;
  return foundPost;
}

export function generateMetadata({ params }: PostPageProps): Metadata {
  const post = getPostFromParams({ params });
  if (!post) notFound();

  const { title, description } = post.metadata;
  const url = post.slug;
  const image = `${SITE.image}/blog-2?title=${title}`;

  return {
    title,
    description,
    openGraph: {
      type: "article",
      title,
      description,
      url,
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
    alternates: { canonical: url },
  };
}

export default function PostPage({ params }: PostPageProps) {
  const post = getPostFromParams({ params });
  if (!post) notFound();

  return (
    <main>
      <h1 className="mt-8 text-balance font-serif text-4xl font-medium leading-[1.2] md:text-5xl md:leading-[1.2]">
        {post.metadata.title}
      </h1>
      <div className="mt-2 flex items-center justify-between">
        <p className="text-gray11 font-mono">
          {formatDate(post.metadata.date)}
        </p>
        <Anchor href="/blogs" underline>
          Back
        </Anchor>
      </div>
      <div className="mb-8 mt-6 md:mb-16">
        <Mdx source={post.content} />
      </div>
      <CommentSection post={post.metadata.title} />
    </main>
  );
}
