import type { ProjectsPreviewProps } from "~/components/ProjectPreview";
import guestbook from "~/images/guestbook.webp";
import website from "~/images/website.webp";

export const SITE = {
  name: "Sameer Jadav",
  description:
    "19 y/o JavaScript/TypeScript developer with a focus on building full-stack apps using Next.js & serverless tech.",
  url: "https://sameerjadav.me",
  image: "https://og.sameerjadav.me",
  author: "Sameer Jadav",
  twitterId: "@SameerJadav_",
  links: {
    twitter: "https://twitter.com/SameerJadav_",
    github: "https://github.com/SameerJadav",
    linkedin: "https://www.linkedin.com/in/sameerjadav",
    mail: "mailto:sameerjdav001@gmail.com",
  },
};

export const PROJECTS: ProjectsPreviewProps[] = [
  {
    title: "Guestbook",
    description:
      "A simple and user-friendly full-stack guestbook application built with Next.js and serverless technologies bootstrapped with `create t3-app`.",
    href: "https://guestbook.sameerjadav.me",
    src: guestbook,
    alt: "Guestbook app screenshot",
    imagePosition: "left",
  },
  {
    title: "Personal Website",
    description:
      "My website, built with Next.js, Tailwind CSS, and Contentlayer, is feature-rich and includes a stunning blogs, engaging comment section, and like functionality.",
    href: "https://sameerjadav.me",
    src: website,
    alt: "My website screenshot",
    imagePosition: "right",
  },
];
