import { SITE } from "~/config"
import { sortedPosts } from "~/lib/utils"
import CustomLink from "~/components/CustomLink"
import PostRow from "~/components/PostRow"
import ProjectCard from "~/components/ProjectCard"

const latestPosts = sortedPosts.slice(0, 4)

export default function HomePage() {
  return (
    <>
      <h1 className="mt-8 font-serif text-4xl font-medium md:text-5xl">
        Sameer Jadav
      </h1>
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
        <p>
          These are the projects that I&apos;ve poured my heart and soul into
          creating, maintaining, and nurturing.
        </p>
      </div>
      <div className="mt-4 grid grid-cols-2 gap-2 md:grid-cols-3 md:gap-4">
        <ProjectCard
          title="Guestbook"
          description="A simple and user-friendly full-stack guestbook app built with Next.js."
          projectLink={`${SITE.links.github}/guestbook`}
        />
        <ProjectCard
          title="Cosmix"
          description="An open-source gaming app built with Next.js 13 and bootstrapped with `create t3-app`."
          projectLink={`${SITE.links.github}/Cosmix`}
        />
        <ProjectCard
          title="sameerjadav.me"
          description="My current website made with Next.js, Tailwind CSS and Contentlayer."
          projectLink={`${SITE.links.github}/sameerjadav.me`}
        />
      </div>
      <p className="mt-4">
        I&apos;ve started writing blogs about the technologies I&apos;m
        interested in. I&apos;ll be sharing my own experiences and trying to
        pass on some knowledge to anyone who&apos;s interested.
      </p>
      <div className="mt-4 space-y-2">
        {latestPosts.map((post) => (
          <PostRow key={post.slug} post={post} />
        ))}
        <CustomLink href="/blog">All posts ➛</CustomLink>
      </div>
      <p className="mb-8 mt-4 md:mb-16">
        I&apos;m always up for making new friends and having a good chat. Reach
        out to me on <CustomLink href={SITE.links.twitter}>Twitter</CustomLink>,{" "}
        <CustomLink href={SITE.links.github}>Github</CustomLink> or drop me an
        email at{" "}
        <CustomLink href={SITE.links.mail}>sameerjadav001@gmail.com</CustomLink>
        .
      </p>
    </>
  )
}
