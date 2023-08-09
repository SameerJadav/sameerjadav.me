import { type Metadata } from "next"
import { SITE } from "~/config"
import { sortedPosts } from "~/lib/utils"
import Preview from "~/components/Preview"

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

export default function BlogPage() {
  return (
    <div>
      <h1 className="mt-8 font-serif text-5xl font-medium">Blog</h1>
      <div className="mt-6 space-y-4">
        {sortedPosts.map((post) => (
          <Preview key={post.slug} post={post} />
        ))}
      </div>
    </div>
  )
}
