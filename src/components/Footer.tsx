import { SITE } from "~/config"
import CustomLink from "~/components/CustomLink"
import { Icons } from "~/components/Icons"

export default function Footer() {
  return (
    <footer className="mb-8 mt-6 flex flex-col items-center justify-center gap-4">
      <div className="flex items-center gap-4">
        <CustomLink href={SITE.links.twitter}>
          <Icons.Twitter className="h-6 w-6" />
        </CustomLink>
        <CustomLink href={SITE.links.github}>
          <Icons.Github className="h-6 w-6" />
        </CustomLink>
        <CustomLink href={SITE.links.linkedin}>
          <Icons.Linkedin className="h-6 w-6" />
        </CustomLink>
        <CustomLink href={SITE.links.mail}>
          <Icons.Mail className="h-6 w-6" />
        </CustomLink>
      </div>
      <p className="text-center text-sm md:text-base">
        Built by{" "}
        <CustomLink href={SITE.links.twitter} underline>
          {SITE.name}
        </CustomLink>
        . Source code is available on{" "}
        <CustomLink href={`${SITE.links.github}/sameerjadav.me`} underline>
          Github
        </CustomLink>
        .
      </p>
    </footer>
  )
}
