import Skeleton from "~/components/ui/Skeleton"

export default function HeaderSkeleton() {
  return (
    <div className="mt-8 w-full md:mt-16">
      <div className="flex items-center gap-4">
        <Skeleton className="h-8 w-[59.516px]" />
        <Skeleton className="h-8 w-[57.734px]" />
        <Skeleton className="h-8 w-[58.656px]" />
      </div>
    </div>
  )
}
