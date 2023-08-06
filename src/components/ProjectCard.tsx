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
    <div className="rounded-md border border-slate7 bg-slate3 p-2">
      <CustomLink href={projectLink} title={title} icon />
      <p className="mt-2 text-slate11">
        <Balancer>{description}</Balancer>
      </p>
    </div>
  )
}
