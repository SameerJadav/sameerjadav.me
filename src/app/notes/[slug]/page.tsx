/* eslint-disable @typescript-eslint/require-await */
import { type Metadata } from "next"
import { notFound } from "next/navigation"
import type { Notes } from "contentlayer/generated"
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

export async function generateStaticParams(): Promise<{ slug: string }[]> {
  return allNotes.map((note): { slug: string } => ({
    slug: note.slugAsParams,
  }))
}

function getNoteFromParams({ params }: NotePageProps): Notes | null {
  const slug = params.slug

  const note = allNotes.find((note) => note.slugAsParams === slug)

  if (!note) return null

  return note
}

export async function generateMetadata({
  params,
}: NotePageProps): Promise<Metadata> {
  const note = getNoteFromParams({ params })

  if (!note) notFound()

  const title = note.title
  const description = note.description
  const url = `${SITE.url}/notes/${note.slugAsParams}`
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

export default async function NotePage({ params }: NotePageProps) {
  const note = getNoteFromParams({ params })

  if (!note) notFound()

  return (
    <article>
      <h1 className="mt-8 font-serif text-4xl font-medium leading-[1.2] md:text-5xl md:leading-[1.2]">
        <Balancer>{titleCase(note.title)}</Balancer>
      </h1>
      <div className="mt-2 flex items-center justify-between">
        <p className="font-mono text-gray11">{formatDate(note.publishedAt)}</p>
        <CustomLink href="/notes" underline>
          Back
        </CustomLink>
      </div>
      <div className="mb-8 mt-6 md:mb-16">
        <Mdx code={note.body.code} />
      </div>
    </article>
  )
}
