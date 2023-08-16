import { type MetadataRoute } from "next"
import { allPosts, allNotes } from "contentlayer/generated"
import { SITE } from "~/config"

export default function sitemap(): MetadataRoute.Sitemap {
  const posts = allPosts.map((post) => ({
    url: `${SITE.url}${post.slug}`,
    lastModified: new Date(post.publishedAt).toISOString().split("T")[0],
  }))

  const notes = allNotes.map((note) => ({
    url: `${SITE.url}${note.slug}`,
    lastModified: new Date(note.publishedAt).toISOString().split("T")[0],
  }))

  const routes = ["", "/blogs", "/notes"].map((route) => ({
    url: `${SITE.url}${route}`,
    lastModified: new Date().toISOString().split("T")[0],
  }))

  return [...routes, ...posts, ...notes]
}
