import { SITE } from "~/config"
import CustomLink from "~/components/CustomLink"
import { Icons } from "~/components/Icons"

export default function Footer() {
  return (
    <footer className="mb-8 mt-6 flex items-center justify-between gap-4 border-t border-gray6 pt-6">
      <p className="text-lg">{SITE.name}</p>
      <div className="flex items-center gap-4">
        <CustomLink href={SITE.links.twitter}>
          <Icons.Twitter className="h-6 w-6" />
          <span className="sr-only">Link to my Twitter</span>
        </CustomLink>
        <CustomLink href={SITE.links.github}>
          <Icons.Github className="h-6 w-6" />
          <span className="sr-only">Link to my GitHub</span>
        </CustomLink>
        <CustomLink href={SITE.links.linkedin}>
          <Icons.Linkedin className="h-6 w-6" />
          <span className="sr-only">Link to my LinkedIn</span>
        </CustomLink>
        <CustomLink href={SITE.links.mail}>
          <Icons.Mail className="h-6 w-6" />
          <span className="sr-only">Link to my E-Mail</span>
        </CustomLink>
      </div>
    </footer>
  )
}
