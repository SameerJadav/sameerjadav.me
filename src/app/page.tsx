import { SITE } from "~/config"
import { sortedPosts } from "~/lib/utils"
import CustomLink from "~/components/CustomLink"
import H1 from "~/components/H1"
import H2 from "~/components/H2"
import LatestPosts from "~/components/LatestPosts"
import ProjectPreview from "~/components/ProjectPreview"
import { projects } from "~/components/Projects"

const latestPosts = sortedPosts.slice(0, 4)

export default function HomePage() {
  return (
    <main>
      <section>
        <H1 lable="Sameer Jadav" />
        <div className="mt-6 space-y-4">
          <p>
            I am a 19-year-old JavaScript/TypeScript developer who specializes
            in building performant, scalable, and accessible applications using
            Next.js and serverless technologies. I am also exploring Svelte to
            gain experience with different frameworks. Open-source contributions
            are a significant part of my work, as I&apos;ve contributed to
            several open source projects and all of my projects are open-source.
            Additionally, I write blogs to share my knowledge, enhance my
            writing skills and become more articulate.
          </p>
          <p>
            I&apos;m currently looking for a new role as a developer. Hire me?
          </p>
          <div className="flex items-center gap-4 text-lg">
            <CustomLink href={SITE.links.linkedin} underline icon>
              LinkedIn
            </CustomLink>
            <CustomLink href={SITE.links.github} underline icon>
              GitHub
            </CustomLink>
            <CustomLink href={SITE.links.mail} underline icon>
              Mail
            </CustomLink>
          </div>
        </div>
      </section>
      <section>
        <H2 lable="Projects" />
        <div className="mt-6 divide-y divide-dashed divide-gray6">
          {projects.map((project) => (
            <ProjectPreview
              key={project.id}
              href={project.href}
              title={project.title}
              description={project.description}
              image={project.image}
              imageAlt={project.imageAlt}
              direction={project.direction}
            />
          ))}
        </div>
      </section>
      <section>
        <H2 lable="Latest Posts" />
        <div className="mt-6 space-y-4">
          {latestPosts.map((post) => (
            <LatestPosts key={post.slug} post={post} />
          ))}
          <CustomLink href="/blogs" icon underline>
            All posts
          </CustomLink>
        </div>
      </section>
    </main>
  )
}
