import Link from "next/link"

export default function ProjectsPage() {
  return (
    <>
      <p className="mt-6 md:mt-8">
        Here are the web development and creative coding projects I&apos;ve
        created:
      </p>
      <div className="mt-4 divide-y divide-mauve6">
        <Link
          href="/modweb"
          className="group flex w-full flex-col py-2 transition-colors md:flex-row md:items-center md:justify-between"
        >
          <span className="text-lg group-hover:text-mauve11">ModWeb</span>
          <span className="text-mauve11 group-hover:text-mauve10">
            Interactive guides for building modern web apps
          </span>
        </Link>

        <Link
          href="/guestbook"
          className="group flex w-full flex-col py-2 transition-colors md:flex-row md:items-center md:justify-between"
        >
          <span className="text-lg group-hover:text-mauve11">Guestbook</span>
          <span className="text-mauve11 group-hover:text-mauve10">
            Full stack web application built with T3 stack
          </span>
        </Link>
        <Link
          href="/qrcode"
          className="group flex w-full flex-col py-2 transition-colors md:flex-row md:items-center md:justify-between"
        >
          <span className="text-lg group-hover:text-mauve11">
            QR Code Generator
          </span>
          <span className="text-mauve11 group-hover:text-mauve10">
            A simple and userfriendly QR code generator
          </span>
        </Link>
        <Link
          href="/3dtext"
          className="group flex w-full flex-col py-2 transition-colors md:flex-row md:items-center md:justify-between"
        >
          <span className="text-lg group-hover:text-mauve11">3D Text</span>
          <span className="text-mauve11 group-hover:text-mauve10">
            3D text made with react-three-fiber and Next.js
          </span>
        </Link>
      </div>
    </>
  )
}
