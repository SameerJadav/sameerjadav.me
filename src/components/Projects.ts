import { type StaticImageData } from "next/image"
import guestbook from "~/images/guestbook.png"
import website from "~/images/website.png"

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
    title: "Guestbook",
    description:
      "A simple and user-friendly full-stack guestbook application built with Next.js and serverless technologies bootstrapped with `create t3-app`.",
    href: "https://guestbook.sameerjadav.me",
    image: guestbook,
    imageAlt: "Guestbook app screenshot",
    direction: "left",
  },
  {
    id: 2,
    title: "sameerjadav.me",
    description:
      "My website, built with Next.js, Tailwind CSS, and Contentlayer, is feature-rich and includes a stunning blog, engaging comment section, and like functionality.",
    href: "https://sameerjadav.me",
    image: website,
    imageAlt: "My website screenshot",
    direction: "right",
  },
]
