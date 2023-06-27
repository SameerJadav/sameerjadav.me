import { Metadata } from "next"
import { notFound } from "next/navigation"
import { allProjects } from "contentlayer/generated"
import { getMDXComponent } from "next-contentlayer/hooks"

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

  const Content = getMDXComponent(project.body.code)

  return (
    <article>
      <h1>{project.title}</h1>
      <p>{project.description}</p>
      <Content />
    </article>
  )
}
