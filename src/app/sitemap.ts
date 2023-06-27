import { allProjects } from "contentlayer/generated"
import { siteConfig } from "~/config/site"

export default async function sitemap() {
  const project = allProjects.map((project) => ({
    url: `https://leerob.io/blog/${project.slug}`,
    lastModified: new Date().toISOString().split("T")[0],
  }))

  const routes = ["", "/projects", "/blog", "/uses"].map((route) => ({
    url: `${siteConfig.url}${route}`,
    lastModified: new Date().toISOString().split("T")[0],
  }))

  return [...routes, ...project]
}
