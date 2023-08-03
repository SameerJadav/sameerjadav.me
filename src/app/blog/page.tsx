import { type Metadata } from "next"
import { allPosts } from "contentlayer/generated"
import { SITE } from "~/config"
import { formatDate } from "~/lib/utils"
import { MyLink } from "~/components/MyLink"

const title = "Blog"
const description = "Sameer Jadav's blog"
const url = `${SITE.url}/blog`
const image = `${SITE.image}/og?title=${title}`

export const metadata: Metadata = {
  title: title,
  description: description,
  openGraph: {
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

const sortedPosts = allPosts.sort((a, b) => {
  return new Date(b.publishedAt).getTime() - new Date(a.publishedAt).getTime()
})

export default function BlogPage() {
  return (
    <div>
      <h1 className="mt-8 text-2xl font-medium tracking-tight">Blog</h1>
      <div className="mt-6 space-y-4">
        {sortedPosts.map((post) => (
          <div key={post.slug} className="space-y-2">
            <MyLink
              href={post.slug}
              title={post.title}
              className="text-lg font-medium"
            />
            <p className="text-slate11">{post.description}</p>
            <p className="font-mono text-slate11">
              {formatDate(post.publishedAt)}
            </p>
          </div>
        ))}
      </div>
    </div>
  )
}
