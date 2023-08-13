import { type Metadata } from "next"
import { SITE } from "~/config"
import { sortedPosts } from "~/lib/utils"
import ContentPreview from "~/components/ContentPreview"
import H1 from "~/components/H1"

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
      <H1 lable="Blog" />
      <div className="mt-6 space-y-4">
        {sortedPosts.map((post) => (
          <ContentPreview key={post.slug} content={post} />
        ))}
      </div>
    </div>
  )
}
