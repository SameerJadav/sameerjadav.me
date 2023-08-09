import { type Metadata } from "next"
import { SITE } from "~/config"
import { sortedNotes } from "~/lib/utils"
import Preview from "~/components/Preview"

const title = "Notes"
const description = "Programming notes"
const url = `${SITE.url}/notes`
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
      <h1 className="mt-8 font-serif text-4xl font-medium md:text-5xl">
        Notes
      </h1>
      <div className="mt-6 space-y-4">
        {sortedNotes.map((note) => (
          <Preview key={note.slug} post={note} />
        ))}
      </div>
    </div>
  )
}
