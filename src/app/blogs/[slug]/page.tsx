import type { Metadata } from "next";
import { notFound } from "next/navigation";
import { auth } from "~/server/auth";
import { InternalLink } from "~/components/Anchor";
import CommentSection from "~/components/CommentSection";
import Mdx from "~/components/Mdx";
import { SITE } from "~/config";
import { allPosts } from "~/utils/blog";
import { getElapsedTime } from "~/utils/date";

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

export default async function PostPage({ params }: PostPageProps) {
  const post = getPostFromParams({ params });
  if (!post) notFound();

  const session = auth();

  const fulldate = new Date(post.metadata.date).toLocaleDateString("en-us", {
    month: "long",
    day: "numeric",
    year: "numeric",
  });

  const elapsedTime = getElapsedTime(post.metadata.date).short;

  const date = `${fulldate} (${elapsedTime})`;

  return (
    <main>
      <h1 className="mt-8 text-balance font-serif text-4xl leading-[1.2] md:text-5xl md:leading-[1.2]">
        {post.metadata.title}
      </h1>
      <div className="mt-2 flex items-center justify-between">
        <p className="text-gray11 font-mono">{date}</p>
        <InternalLink highlight underline url="/blogs">
          Back
        </InternalLink>
      </div>
      <div className="mb-8 mt-6 md:mb-16">
        <Mdx source={post.content} />
      </div>
      <CommentSection post={post.metadata.title} session={await session} />
    </main>
  );
}
