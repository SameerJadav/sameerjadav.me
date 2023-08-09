import { type Metadata } from "next"
import { notFound } from "next/navigation"
import { allNotes } from "contentlayer/generated"
import { Balancer } from "react-wrap-balancer"
import { titleCase } from "title-case"
import { SITE } from "~/config"
import { formatDate } from "~/lib/utils"
import CustomLink from "~/components/CustomLink"
import { Mdx } from "~/components/MdxComponents"

interface NotePageProps {
  params: {
    slug: string
  }
}

// eslint-disable-next-line @typescript-eslint/require-await
export async function generateStaticParams() {
  return allNotes.map((note) => ({
    slug: note.slugAsParams,
  }))
}

// eslint-disable-next-line @typescript-eslint/require-await
async function getNoteFromParams({ params }: NotePageProps) {
  const slug = params.slug

  const note = allNotes.find((note) => note.slugAsParams === slug)

  if (!note) null

  return note
}

// eslint-disable-next-line @typescript-eslint/require-await
export async function generateMetadata({
  params,
}: NotePageProps): Promise<Metadata> {
  const note = await getNoteFromParams({ params })

  if (!note) notFound()

  const title = note.title
  const description = note.description
  const url = `${SITE.url}/notes/${note.slugAsParams}`
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

export default async function NotePage({ params }: NotePageProps) {
  const note = await getNoteFromParams({ params })

  if (!note) notFound()

  return (
    <>
      <h1 className="mt-8 text-2xl font-medium tracking-tight">
        <Balancer>{titleCase(note.title)}</Balancer>
      </h1>
      <div className="mt-2 flex items-center justify-between text-sm">
        <p className="font-mono text-gray11">{formatDate(note.publishedAt)}</p>
        <CustomLink href="/notes">Back</CustomLink>
      </div>
      <div className="mb-8 md:mb-16">
        <Mdx code={note.body.code} />
      </div>
    </>
  )
}
