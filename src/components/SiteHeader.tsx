"use client"

import Link from "next/link"
import { useSelectedLayoutSegment } from "next/navigation"
import { LayoutGroup, motion } from "framer-motion"
import { cn } from "~/lib/utils"

const navItems = {
  "": {
    lable: "Home",
  },
  blog: {
    lable: "Blog",
  },
  notes: {
    lable: "Notes",
  },
}

export default function SiteHeader() {
  const segment = useSelectedLayoutSegment() ?? ""

  return (
    <header className="mt-8 w-full md:mt-16">
      <nav>
        <ul className="flex items-center gap-4">
          <LayoutGroup>
            {Object.entries(navItems).map(([path, { lable }]) => {
              const isActive = segment === path
              return (
                <li key={path} className="font-medium">
                  <Link
                    href={`/${path}`}
                    className={cn(
                      "text-gray11 transition-colors ease-in hover:text-gray12 focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-gray7",
                      isActive && "pointer-events-none text-gray12",
                    )}
                  >
                    <div className="relative px-2 py-1">
                      <span>{lable}</span>
                      {isActive ? (
                        <motion.div
                          className="absolute inset-0 top-7 mx-2 h-0.5 rounded-full bg-gradient-to-r from-gray8 to-gray1"
                          layoutId="sidebar"
                          transition={{
                            type: "spring",
                            stiffness: 350,
                            damping: 30,
                            duration: 150,
                          }}
                        />
                      ) : null}
                    </div>
                  </Link>
                </li>
              )
            })}
          </LayoutGroup>
        </ul>
      </nav>
    </header>
  )
}
