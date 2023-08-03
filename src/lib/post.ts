import { allPosts } from "contentlayer/generated"

const MS_PER_DAY = 1000 * 60 * 60 * 24

export function formatDate(dateString: string): string {
  const currentDate = new Date()
  const postDate = new Date(dateString)
  const timeDiff = currentDate.getTime() - postDate.getTime()
  const daysAgo = Math.floor(timeDiff / MS_PER_DAY)
  const monthsAgo = Math.floor(daysAgo / 30)
  const yearsAgo = Math.floor(monthsAgo / 12)

  let formattedDate = ""

  switch (true) {
    case yearsAgo > 0:
      formattedDate = `${yearsAgo}y ago`
      break
    case monthsAgo > 0:
      formattedDate = `${monthsAgo}mo ago`
      break
    case daysAgo > 0:
      formattedDate = `${daysAgo}d ago`
      break
    default:
      formattedDate = "Today"
      break
  }

  const fullDate = postDate.toLocaleString("en-us", {
    month: "long",
    day: "numeric",
    year: "numeric",
  })

  return `${fullDate} (${formattedDate})`
}

export const sortedPosts = allPosts.sort((a, b) => {
  return new Date(b.publishedAt).getTime() - new Date(a.publishedAt).getTime()
})
