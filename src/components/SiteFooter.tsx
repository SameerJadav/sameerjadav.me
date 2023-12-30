import Anchor from "~/components/Anchor";
import Icons from "~/components/Icons";
import { SITE } from "~/config";

export default function SiteFooter() {
  return (
    <footer className="my-8 flex items-center justify-between gap-4 border-t border-gray-6 pt-6">
      <p className="text-lg font-medium">{SITE.name}</p>
      <div className="flex items-center gap-4">
        <Anchor href={SITE.links.twitter}>
          <Icons.Twitter className="size-6" />
          <span className="sr-only">Link to my Twitter</span>
        </Anchor>
        <Anchor href={SITE.links.github}>
          <Icons.Github className="size-6" />
          <span className="sr-only">Link to my GitHub</span>
        </Anchor>
        <Anchor href={SITE.links.linkedin}>
          <Icons.Linkedin className="size-6" />
          <span className="sr-only">Link to my LinkedIn</span>
        </Anchor>
        <Anchor href={SITE.links.mail}>
          <Icons.Mail className="size-6" />
          <span className="sr-only">Link to my E-Mail</span>
        </Anchor>
      </div>
    </footer>
  );
}
