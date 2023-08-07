import { type Metadata } from "next"
import { notFound } from "next/navigation"
import { allNotes } from "contentlayer/generated"
import { Balancer } from "react-wrap-balancer"
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
  return allNotes.map((post) => ({
    slug: post.slugAsParams,
  }))
}

// eslint-disable-next-line @typescript-eslint/require-await
async function getPostFromParams({ params }: PostPageProps) {
  const slug = params.slug

  const post = allNotes.find((post) => post.slugAsParams === slug)

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
  const image = `${SITE.image}/og?title=${title}`

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
      <h1 className="mt-8 text-2xl font-medium tracking-tight">
        <Balancer>{post.title}</Balancer>
      </h1>
      <div className="mt-2 flex items-center justify-between text-sm">
        <p className="font-mono text-slate11">{formatDate(post.publishedAt)}</p>
        <CustomLink href="/notes" title="Back" />
      </div>
      <div className="mb-8 md:mb-16">
        <Mdx code={post.body.code} />
      </div>
    </>
  )
}
