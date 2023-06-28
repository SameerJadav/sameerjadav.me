import { type ClassValue, clsx } from "clsx"
import { twMerge } from "tailwind-merge"

export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs))
}

export const getTitle = (pathname: string): string => {
  if (pathname === "/") {
    return "About"
  }

  const title =
    pathname.split("/").join("").charAt(0).toUpperCase() +
    pathname.split("/").join("").slice(1)

  return title
}
