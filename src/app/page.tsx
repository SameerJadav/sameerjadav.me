import { SITE } from "~/config"
import { MyLink } from "~/components/MyLink"
import ProjectCard from "~/components/ProjectCard"

export default function HomePage() {
  return (
    <>
      <h1 className="mt-8 text-2xl font-bold tracking-tighter">
        Hey, I&apos;m Sameer 👋
      </h1>
      <div className="mt-6 space-y-4">
        <p>
          I&apos;m a 19-year-old web developer. I enjoy learning new things,
          discovering more about myself, and watching anime. My current goal is
          to learn more about programming and become an articulate man.
        </p>
        <p>
          At the moment, I&apos;m working on building a gaming app(
          <MyLink title="Cosmix" href={`${SITE.links.github}/Cosmix`} />
          ), expanding my knowledge of full-stack development, learning Go
          programming language, and improving my writing skills.
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
          description="My personal website built with Astro and Tailwind CSS."
          projectLink={`${SITE.links.github}/sameerjadav.me`}
        />
      </div>
      <p className="mt-4">
        I&apos;m always up for making new friends and having a good chat. Reach
        out to me on <MyLink title="Twitter" href={SITE.links.twitter} />,{" "}
        <MyLink title="Github" href={SITE.links.github} /> or drop me an email
        at <MyLink title="sameerjadav001@gmail.com" href={SITE.links.mail} />.
      </p>
    </>
  )
}
