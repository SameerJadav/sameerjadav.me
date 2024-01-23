import type { StaticImageData } from "next/image";
import Image from "next/image";
import { ExternalLink } from "~/components/Anchor";
import { cn } from "~/utils/cn";

export interface ProjectsPreviewProps {
  src: StaticImageData;
  alt: string;
  href: string;
  title: string;
  description: string;
  imagePosition: "left" | "right";
}

export default function ProjectsPreview({
  src,
  alt,
  href,
  title,
  description,
  imagePosition,
}: ProjectsPreviewProps) {
  return (
    <div
      className={cn(
        "flex flex-col gap-4 [&:not(:first-child)]:pt-4",
        imagePosition === "right" ? "md:flex-row-reverse" : "md:flex-row",
      )}
    >
      <div className="flex-1">
        <Image
          alt={alt}
          className="rounded-md border border-gray-6"
          placeholder="blur"
          src={src}
        />
      </div>
      <div
        className={cn(
          "flex-1",
          imagePosition === "right"
            ? "md:border-r md:border-dashed md:border-gray-6 md:pr-4 md:text-right"
            : "md:border-l md:border-dashed md:border-gray-6 md:pl-4 md:text-left",
        )}
      >
        <ExternalLink
          className="font-serif text-2xl md:text-3xl"
          highlight
          url={href}
        >
          {title}
        </ExternalLink>
        <p className="mt-2 text-lg text-gray-11">{description}</p>
      </div>
    </div>
  );
}
