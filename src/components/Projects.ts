import { type StaticImageData } from "next/image"
import guestbook from "~/images/guestbook.png"

interface Project {
  id: number
  href: string
  title: string
  description: string
  image: StaticImageData
  imageAlt: string
  direction: "left" | "right"
}

export const projects: Project[] = [
  {
    id: 1,
    href: "https://guestbook.sameerjadav.me",
    title: "Guestbook",
    description:
      "A simple and user-friendly full-stack guestbook application built with Next.js and serverless technologies bootstrapped with `create t3-app`.",
    image: guestbook,
    imageAlt: "Guestbook app screenshot",
    direction: "left",
  },
]
