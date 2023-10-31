"use client"

import { useRef } from "react"
import type { ElementRef } from "react"
import { Icons } from "~/components/Icons"
import CarouselImageContainer from "~/components/blog/carousel/CarouselImageContainer"

const Carousel = () => {
  const scrollRef = useRef<ElementRef<"div">>(null)

  const scroll = (scrollOffset: number) =>
    scrollRef.current?.scrollBy({ left: scrollOffset, behavior: "smooth" })

  return (
    <div className="max-w-full space-y-2 rounded-md border border-gray7 bg-gray2 p-2">
      <div className="flex items-center justify-end gap-2">
        <button
          onClick={() => scroll(-300)}
          className="rounded-full border border-gray7 p-1.5 hover:border-gray8 focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-gray7"
        >
          <Icons.ChevronLeft className="h-4 w-4" />
          <span className="sr-only">Previous</span>
        </button>
        <button
          onClick={() => scroll(300)}
          className="rounded-full border border-gray7 p-1.5 hover:border-gray8 focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-gray7"
        >
          <Icons.ChevronRight className="h-4 w-4" />
          <span className="sr-only">Next</span>
        </button>
      </div>
      <CarouselImageContainer ref={scrollRef} />
    </div>
  )
}

export default Carousel
