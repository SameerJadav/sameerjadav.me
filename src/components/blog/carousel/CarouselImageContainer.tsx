import { forwardRef } from "react"
import type { ElementRef } from "react"
import Image from "next/image"
import image_1 from "~/images/blogs/carousel/1.webp"
import image_2 from "~/images/blogs/carousel/2.webp"
import image_3 from "~/images/blogs/carousel/3.webp"
import image_4 from "~/images/blogs/carousel/4.webp"
import image_5 from "~/images/blogs/carousel/5.webp"
import image_6 from "~/images/blogs/carousel/6.webp"

const IMAGES = [
  { src: image_1, alt: "Image 1" },
  { src: image_2, alt: "Image 2" },
  { src: image_3, alt: "Image 3" },
  { src: image_4, alt: "Image 4" },
  { src: image_5, alt: "Image 5" },
  { src: image_6, alt: "Image 6" },
]

const CarouselImageContainer = forwardRef<ElementRef<"div">>((_, ref) => {
  return (
    <div
      ref={ref}
      className="grid snap-x snap-mandatory auto-cols-[calc((100%-1rem)/2)] grid-flow-col gap-4 overflow-x-hidden rounded-lg md:auto-cols-[calc((100%-2*1rem)/3)]"
    >
      {IMAGES.map(({ src, alt }, index) => (
        <Image
          key={index}
          src={src}
          alt={alt}
          placeholder="blur"
          className="snap-end rounded-lg object-cover"
        />
      ))}
    </div>
  )
})

CarouselImageContainer.displayName = "CarouselImageContainer"
export default CarouselImageContainer
