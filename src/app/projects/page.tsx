import Link from "next/link"
import { allProjects } from "contentlayer/generated"
import SiteHeader from "~/components/site-header"

export default function ProjectsPage() {
  return (
    <>
      <SiteHeader />
      <p className="mt-6 md:mt-8">
        Here are the web development and creative coding projects I&apos;ve
        created:
      </p>
      <div className="mt-4 divide-y divide-mauve6">
        {allProjects.map((project) => (
          <Link
            key={project.slug}
            href={project.slug}
            className="group flex w-full flex-col py-2 transition-colors md:flex-row md:items-center md:justify-between"
          >
            <span className="text-lg group-hover:text-mauve11">
              {project.title}
            </span>
            <span className="text-mauve11 group-hover:text-mauve10">
              {project.description}
            </span>
          </Link>
        ))}
      </div>
    </>
  )
}
