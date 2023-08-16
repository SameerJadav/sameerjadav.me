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
    <>
      <H1 lable="Sameer Jadav" />
      <div className="mt-6 space-y-4">
        <p>
          I am a 19-year-old JavaScript/TypeScript developer who specializes in
          building full-stack applications using Next.js and serverless
          technologies. Currently, I am also exploring Svelte to gain experience
          with different frameworks. Open-source contributions are a significant
          part of my work, as all of my projects are open-source. Additionally,
          I write blogs to enhance my writing skills and become more articulate.
        </p>
        <p>
          During my free time, I enjoy watching anime and listening to podcasts
          to expand my knowledge on various topics. Additionally, I make it a
          point to exercise every day and spend some quiet time alone without
          any music or shows to recharge my batteries.
        </p>
      </div>
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
      <H2 lable="Latest Posts" />
      <div className="mt-6 space-y-4">
        {latestPosts.map((post) => (
          <LatestPosts key={post.slug} post={post} />
        ))}
        <CustomLink href="/blog" icon className="font-medium">
          Read more
        </CustomLink>
      </div>
      <p className="mb-8 mt-4 md:mb-16">
        I&apos;m always up for making new friends and having a good chat. Reach
        out to me on{" "}
        <CustomLink href={SITE.links.twitter} underline>
          Twitter
        </CustomLink>
        ,{" "}
        <CustomLink href={SITE.links.github} underline>
          Github
        </CustomLink>{" "}
        or drop me an email at{" "}
        <CustomLink href={SITE.links.mail} underline>
          sameerjadav001@gmail.com
        </CustomLink>
        .
      </p>
    </>
  )
}
