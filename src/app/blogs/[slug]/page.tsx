/* eslint-disable @typescript-eslint/require-await */
import { type Metadata } from "next"
import { notFound } from "next/navigation"
import type { Post } from "contentlayer/generated"
import { allPosts } from "contentlayer/generated"
import { Balancer } from "react-wrap-balancer"
import { titleCase } from "title-case"
import { SITE } from "~/config"
import { formatDate } from "~/lib/utils"
import CustomLink from "~/components/CustomLink"
import { Mdx } from "~/components/MdxComponents"

interface PostPageProps {
  params: {
    slug: string
  }
}

export async function generateStaticParams(): Promise<{ slug: string }[]> {
  return allPosts.map((post) => ({
    slug: post.slugAsParams,
  }))
}

function getPostFromParams({ params }: PostPageProps): Post | null {
  const slug = params.slug

  const post = allPosts.find((post) => post.slugAsParams === slug)

  if (!post) return null

  return post
}

export async function generateMetadata({
  params,
}: PostPageProps): Promise<Metadata> {
  const post = getPostFromParams({ params })

  if (!post) notFound()

  const title = post.title
  const description = post.description
  const url = `${SITE.url}/posts/${post.slugAsParams}`
  const image = `${SITE.image}/blog?title=${title}`

  const sharedMeta = {
    title: title,
    description: description,
    images: [image],
  }

  return {
    title: title,
    description: description,
    openGraph: {
      type: "article",
      url: url,
      ...sharedMeta,
      images: [
        {
          url: image,
          width: 1200,
          height: 630,
          alt: SITE.name,
        },
      ],
    },
    twitter: {
      card: "summary_large_image",
      ...sharedMeta,
    },
    alternates: { canonical: url },
  }
}

export default async function PostPage({ params }: PostPageProps) {
  const post = getPostFromParams({ params })

  if (!post) notFound()

  return (
    <>
      <h1 className="mt-8 font-serif text-4xl font-medium leading-[1.2] md:text-5xl md:leading-[1.2]">
        <Balancer>{titleCase(post.title)}</Balancer>
      </h1>
      <div className="mt-2 flex items-center justify-between">
        <p className="font-mono text-gray11">{formatDate(post.publishedAt)}</p>
        <CustomLink href="/blogs" underline>
          Back
        </CustomLink>
      </div>
      <div className="mb-8 mt-6 md:mb-16">
        <Mdx code={post.body.code} />
      </div>
    </>
  )
}
