import { ExternalLink } from "~/components/Anchor";
import Icons from "~/components/Icons";
import { SITE } from "~/config";

export default function SiteFooter() {
  return (
    <footer className="my-8 flex items-center justify-between gap-4 border-t border-gray-6 pt-6">
      <p className="text-lg font-medium">{SITE.name}</p>
      <div className="flex items-center gap-4">
        <ExternalLink highlight url={SITE.links.twitter}>
          <Icons.Twitter className="size-6" />
          <span className="sr-only">Link to my Twitter</span>
        </ExternalLink>
        <ExternalLink highlight url={SITE.links.github}>
          <Icons.Github className="size-6" />
          <span className="sr-only">Link to my GitHub</span>
        </ExternalLink>
        <ExternalLink highlight url={SITE.links.linkedin}>
          <Icons.Linkedin className="size-6" />
          <span className="sr-only">Link to my LinkedIn</span>
        </ExternalLink>
        <ExternalLink highlight url={SITE.links.mail}>
          <Icons.Mail className="size-6" />
          <span className="sr-only">Link to my E-Mail</span>
        </ExternalLink>
      </div>
    </footer>
  );
}
