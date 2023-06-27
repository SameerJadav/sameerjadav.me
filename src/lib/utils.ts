import { type ClassValue, clsx } from "clsx"
import { twMerge } from "tailwind-merge"

export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs))
}

export const getTitle = (pathname: string): string => {
  switch (pathname) {
    case "/thoughts":
      return "Thoughts"
    case "/projects":
      return "Projects"
    case "/":
      return "About"
    default:
      return "Unknown"
  }
}
