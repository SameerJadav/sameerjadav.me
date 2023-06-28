import { Metadata } from "next"
import Link from "next/link"
import { notFound } from "next/navigation"
import { allProjects } from "contentlayer/generated"
import { Balancer } from "react-wrap-balancer"
import { Mdx } from "~/components/mdx-components"

interface ProjectPageProps {
  params: {
    slug: string
  }
}

async function getProjectFromParams({ params }: ProjectPageProps) {
  const slug = params.slug

  const project = allProjects.find((project) => project.slugAsParams === slug)

  if (!project) null

  return project
}

export async function generateStaticParams() {
  return allProjects.map((project) => ({
    slug: project.slugAsParams,
  }))
}

export async function generateMetadata({
  params,
}: ProjectPageProps): Promise<Metadata> {
  const project = await getProjectFromParams({ params })

  if (!project) notFound()

  return {
    title: project.title,
    description: project.description,
  }
}

export default async function GuidesPage({ params }: ProjectPageProps) {
  const project = await getProjectFromParams({ params })

  if (!project) notFound()

  return (
    <article className="mt-8 md:mt-16">
      <h1 className="text-4xl font-bold">{project.title}</h1>
      <div className="mt-2 flex items-end justify-between md:items-center">
        <p className="flex-1 text-lg text-mauve11">
          <Balancer>{project.description}</Balancer>
        </p>
        <Link
          href="/projects"
          className="border-b border-mauve7 leading-none transition-colors hover:border-mauve8 hover:text-mauve11"
        >
          Back
        </Link>
      </div>
      <div className="mt-5">
        <Mdx code={project.body.code} />
      </div>
    </article>
  )
}
