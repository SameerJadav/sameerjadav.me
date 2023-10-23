import { type ClassValue, clsx } from "clsx"
import type { Post } from "contentlayer/generated"
import { allPosts } from "contentlayer/generated"
import { twMerge } from "tailwind-merge"

export const cn = (...inputs: ClassValue[]): string => twMerge(clsx(inputs))

const MS_PER_DAY = 1000 * 60 * 60 * 24

export const formatDate = (dateString: string): string => {
  const currentDate = new Date()
  const postDate = new Date(dateString)
  const timeDiff = currentDate.getTime() - postDate.getTime()
  const daysAgo = Math.floor(timeDiff / MS_PER_DAY)
  const monthsAgo = Math.floor(daysAgo / 30)
  const yearsAgo = Math.floor(monthsAgo / 12)

  let formattedDate = "Today"
  if (yearsAgo > 0) formattedDate = `${yearsAgo}y ago`
  else if (monthsAgo > 0) formattedDate = `${monthsAgo}mo ago`
  else if (daysAgo > 0) formattedDate = `${daysAgo}d ago`

  const fullDate = postDate.toLocaleString("en-us", {
    month: "long",
    day: "numeric",
    year: "numeric",
  })

  return `${fullDate} (${formattedDate})`
}

const sortArrayByDate = (arr: Post[]) =>
  arr
    .slice()
    .sort(
      (a, b): number =>
        new Date(b.publishedAt).getTime() - new Date(a.publishedAt).getTime(),
    )

export const sortedPosts = sortArrayByDate(allPosts)
