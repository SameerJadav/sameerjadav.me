import type { MetadataRoute } from "next";
import { SITE } from "~/config";

export default function sitemap(): MetadataRoute.Sitemap {
  /* const posts = allPosts.map((post) => ({
    url: `${SITE.url}${post.slug}`,
    lastModified: new Date(post.date).toISOString().split("T")[0],
  })); */

  const routes = ["", "/blogs", "/experimental-components"].map((route) => ({
    url: `${SITE.url}${route}`,
    lastModified: new Date().toISOString().split("T")[0],
  }));

  // return [...routes, ...posts];
  return [...routes];
}
