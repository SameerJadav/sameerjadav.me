import type { MetadataRoute } from "next";
import { SITE } from "~/config";
import { allPosts } from "~/utils/blog";

export default function sitemap(): MetadataRoute.Sitemap {
  const posts = allPosts.map((post) => ({
    url: `${SITE.url}${post.slug}`,
    lastModified: new Date(post.metadata.date).toISOString().split("T")[0],
  }));

  const routes = ["", "/blogs"].map((route) => ({
    url: `${SITE.url}${route}`,
    lastModified: new Date().toISOString().split("T")[0],
  }));

  return [...routes, ...posts];
}
