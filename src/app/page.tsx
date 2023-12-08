import Link from "next/link";
import Anchor from "~/components/Anchor";
import H1 from "~/components/H1";
import H2 from "~/components/H2";
import Icons from "~/components/Icons";
import ProjectsPreview from "~/components/ProjectPreview";
import { PROJECTS, SITE } from "~/config";
import { sortedPosts } from "~/utils/blog";

export default function Home() {
  return (
    <main>
      <section>
        <H1 lable={SITE.name} />
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
            <Anchor href={SITE.links.linkedin} underline>
              <Icons.Linkedin className="h-5 w-5" /> LinkedIn
            </Anchor>
            <Anchor href={SITE.links.github} underline>
              <Icons.Github className="h-5 w-5" /> GitHub
            </Anchor>
            <Anchor href={SITE.links.mail} underline>
              <Icons.Mail className="h-5 w-5" /> Mail
            </Anchor>
          </div>
        </div>
      </section>
      <section>
        <H2 lable="Projects" />
        <div className="mt-6 flex flex-col gap-4 divide-y divide-dashed divide-gray-6">
          {PROJECTS.map((project) => (
            <ProjectsPreview
              alt={project.alt}
              description={project.description}
              href={project.href}
              imagePosition={project.imagePosition}
              key={project.title}
              src={project.src}
              title={project.title}
            />
          ))}
        </div>
      </section>
      <section>
        <H2 lable="Latest Posts" />
        <div className="mt-6 space-y-4">
          {sortedPosts.slice(0, 4).map(({ slug, metadata }) => (
            <Link
              className="focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-gray-7"
              href={slug}
              key={slug}
            >
              <div className="flex justify-between gap-4">
                <p>{metadata.title}</p>
                <p>{metadata.date}</p>
              </div>
            </Link>
          ))}
        </div>
      </section>
    </main>
  );
}
