import { Balancer } from "react-wrap-balancer"
import CustomLink from "~/components/CustomLink"

interface ProjectCardProps {
  title: string
  description: string
  projectLink: string
}

export default function ProjectCard({
  title,
  description,
  projectLink,
}: ProjectCardProps) {
  return (
    <div className="rounded-md border border-gray6 bg-gray2 p-2">
      <CustomLink href={projectLink} icon>
        {title}
      </CustomLink>
      <p className="mt-2 text-gray11">
        <Balancer>{description}</Balancer>
      </p>
    </div>
  )
}
