import Link from "next/link"
import { siteConfig } from "~/config/site"

export default function SiteFooter() {
  return (
    <footer className="mt-6 border-t border-mauve6 py-6">
      <nav className="flex items-center justify-center gap-2 md:justify-start">
        <a
          className="border-b border-mauve7 leading-none transition-colors hover:border-mauve8 hover:text-mauve11"
          target="_blank"
          rel="noopener noreferrer"
          href={siteConfig.links.twitter}
        >
          Twitter
        </a>
        ∙
        <a
          className="border-b border-mauve7 leading-none transition-colors hover:border-mauve8 hover:text-mauve11"
          target="_blank"
          rel="noopener noreferrer"
          href={siteConfig.links.github}
        >
          Github
        </a>
        ∙
        <a
          className="border-b border-mauve7 leading-none transition-colors hover:border-mauve8 hover:text-mauve11"
          target="_blank"
          rel="noopener noreferrer"
          href={siteConfig.links.linkedin}
        >
          LinkedIn
        </a>
        ∙
        <a
          className="border-b border-mauve7 leading-none transition-colors hover:border-mauve8 hover:text-mauve11"
          target="_blank"
          rel="noopener noreferrer"
          href={siteConfig.links.instagram}
        >
          Instagram
        </a>
        ∙
        <a
          className="border-b border-mauve7 leading-none transition-colors hover:border-mauve8 hover:text-mauve11"
          target="_blank"
          rel="noopener noreferrer"
          href={siteConfig.links.mail}
        >
          Mail
        </a>
      </nav>
    </footer>
  )
}
