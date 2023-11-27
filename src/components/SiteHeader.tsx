"use client";

import Link from "next/link";
import { useSelectedLayoutSegment } from "next/navigation";
import { motion } from "framer-motion";
import { cn } from "~/utils/cn";

const navItems = [
  {
    path: "",
    label: "Home",
  },
  {
    path: "blogs",
    label: "Blogs",
  },
];

export default function SiteHeader() {
  const segment = useSelectedLayoutSegment() ?? "";

  return (
    <header className="mt-8 w-full md:mt-16">
      <nav>
        <ul className="flex items-center gap-4">
          {navItems.map(({ path, label }) => {
            const isActive = segment === path;
            return (
              <li key={path}>
                <Link
                  className={cn(
                    "relative px-2 py-1 font-medium text-gray-11 hover:text-gray-12 focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-gray-7",
                    isActive && "pointer-events-none text-gray-12",
                  )}
                  href={`/${path}`}
                >
                  {label}
                  {isActive ? (
                    <motion.span
                      className="absolute inset-0 top-7 mx-2 h-0.5 rounded-full bg-gradient-to-r from-gray-8 to-gray-1"
                      layoutId="sidebar"
                      transition={{
                        type: "spring",
                        stiffness: 350,
                        damping: 30,
                        duration: 150,
                      }}
                    />
                  ) : null}
                </Link>
              </li>
            );
          })}
        </ul>
      </nav>
    </header>
  );
}
