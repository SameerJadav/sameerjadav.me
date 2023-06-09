import { Metadata } from "next"
import Link from "next/link"
import { allProjects } from "contentlayer/generated"
import { siteConfig } from "~/config/site"
import SiteHeader from "~/components/site-header"

export const metadata: Metadata = {
  title: "Projects",
  description: "Web development and creative coding projects.",
  openGraph: {
    title: "Projects",
    description: "Web development and creative coding projects.",
    images: [
      {
        url: `${siteConfig.ogImage}/og?title=Projects`,
        alt: "Projects",
      },
    ],
  },
  twitter: {
    title: "Projects",
    description: "Web development and creative coding projects.",
    images: [`${siteConfig.ogImage}/og?title=Projects`],
  },
  alternates: {
    canonical: `${siteConfig.url}/projects`,
  },
}

export default function ProjectsPage() {
  return (
    <>
      <SiteHeader />
      <p className="mt-6">
        Here are the web development and creative coding projects I&apos;ve
        created:
      </p>
      <div className="mt-6 divide-y divide-mauve6">
        {allProjects.map((project) => (
          <Link
            key={project.slug}
            // Change back to slug when the content is writter
            // href={project.slug}
            href={project.projectLink}
            target="_blank"
            rel="noopener noreferrer"
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
      <a href="http://" target="_blank" rel="noopener noreferrer"></a>
    </>
  )
}
