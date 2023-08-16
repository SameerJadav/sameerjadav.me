import { type Metadata } from "next"
import { SITE } from "~/config"
import { sortedNotes } from "~/lib/utils"
import ContentPreview from "~/components/ContentPreview"
import H1 from "~/components/H1"

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

export default function NotesPage() {
  return (
    <div>
      <H1 lable="Notes" />
      <div className="mt-6 space-y-4">
        {sortedNotes.map((note) => (
          <ContentPreview key={note.slug} content={note} />
        ))}
      </div>
    </div>
  )
}
