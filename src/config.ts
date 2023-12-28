import type { ProjectsPreviewProps } from "~/components/ProjectPreview";
import fatality from "~/images/fatality-studios.webp";
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
    title: "Fatality Studios",
    description:
      "A beautiful and accessible music production studio site. Built with Next.js 13 and Tailwindcss features an awesome music player.",
    href: "https://fatalitystudios.com",
    src: fatality,
    alt: "Fatality Studios site screenshot",
    imagePosition: "left",
  },
  {
    title: "Guestbook",
    description:
      "A simple and user-friendly full-stack guestbook application built with Next.js and serverless technologies bootstrapped with T3 app.",
    href: "https://guestbook.sameerjadav.me",
    src: guestbook,
    alt: "Guestbook app screenshot",
    imagePosition: "right",
  },
  {
    title: "Personal Website",
    description:
      "My Next.js site, featuring some of my work, interactive and feature-rich blogs, and tons of cool stuff. Performant, Accessible, and Beautiful",
    href: "https://sameerjadav.me",
    src: website,
    alt: "My website screenshot",
    imagePosition: "left",
  },
];
