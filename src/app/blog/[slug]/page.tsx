import { type Metadata } from "next"
import { notFound } from "next/navigation"
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

// eslint-disable-next-line @typescript-eslint/require-await
export async function generateStaticParams() {
  return allPosts.map((post) => ({
    slug: post.slugAsParams,
  }))
}

// eslint-disable-next-line @typescript-eslint/require-await
async function getPostFromParams({ params }: PostPageProps) {
  const slug = params.slug

  const post = allPosts.find((post) => post.slugAsParams === slug)

  if (!post) null

  return post
}

// eslint-disable-next-line @typescript-eslint/require-await
export async function generateMetadata({
  params,
}: PostPageProps): Promise<Metadata> {
  const post = await getPostFromParams({ params })

  if (!post) notFound()

  const title = post.title
  const description = post.description
  const url = `${SITE.url}/blog/${post.slugAsParams}`
  const image = `${SITE.image}/blog?title=${title}`

  return {
    title: title,
    description: description,
    openGraph: {
      type: "article",
      title: title,
      description: description,
      url: url,
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
      title: title,
      description: description,
      images: [image],
    },
    alternates: { canonical: url },
  }
}

export default async function PostPage({ params }: PostPageProps) {
  const post = await getPostFromParams({ params })

  if (!post) notFound()

  return (
    <>
      <h1 className="mt-8 font-serif text-4xl font-medium leading-[1.2] md:text-5xl md:leading-[1.2]">
        <Balancer>{titleCase(post.title)}</Balancer>
      </h1>
      <div className="mt-2 flex items-center justify-between">
        <p className="font-mono text-gray11">{formatDate(post.publishedAt)}</p>
        <CustomLink href="/blog" underline>
          Back
        </CustomLink>
      </div>
      <div className="mb-8 mt-6 md:mb-16">
        <Mdx code={post.body.code} />
      </div>
    </>
  )
}
