import Image, { type StaticImageData } from "next/image"
import Link from "next/link"

interface ProjectCardProps {
  href: string
  title: string
  description: string
  image: StaticImageData
  imageAlt: string
  direction: "left" | "right"
}

interface ProjectLinkProps {
  href: string
  title: string
}

const ProjectLink = ({ href, title }: ProjectLinkProps) => (
  <Link
    href={href}
    className="font-serif text-2xl font-medium transition-colors ease-in hover:text-blue10 md:text-3xl"
    target="_blank"
    rel="noopener noreferrer"
  >
    {title}
  </Link>
)

export default function ProjectCard({
  href,
  title,
  description,
  image,
  imageAlt,
  direction,
}: ProjectCardProps) {
  return direction === "left" ? (
    <div className="flex flex-col first:pb-6 only:p-0 md:flex-row md:divide-x md:divide-dashed md:divide-gray6 [&:not(:first-child)]:pt-6">
      <div className="flex-1 md:pr-6">
        <Image
          src={image}
          alt={imageAlt}
          placeholder="blur"
          className="rounded-md border border-gray6"
        />
      </div>
      <div className="mt-4 flex-1 md:mt-0 md:pl-6 md:text-left">
        <ProjectLink href={href} title={title} />
        <p className="mt-2 text-lg text-gray11">{description}</p>
      </div>
    </div>
  ) : (
    <div className="flex flex-col-reverse first:pb-6 only:p-0 md:flex-row md:divide-x md:divide-dashed md:divide-gray6 [&:not(:first-child)]:pt-6">
      <div className="mt-4 flex-1 md:mt-0 md:pr-6 md:text-right">
        <ProjectLink href={href} title={title} />
        <p className="mt-2 text-lg text-gray11">{description}</p>
      </div>
      <div className="flex-1 md:pl-6">
        <Image
          src={image}
          alt={imageAlt}
          placeholder="blur"
          className="rounded-md border border-gray6"
        />
      </div>
    </div>
  )
}
