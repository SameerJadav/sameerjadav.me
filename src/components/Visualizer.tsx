import { cn } from "~/lib/utils"

interface VisualizerProps {
  children: React.ReactNode
  className?: string
}

export default function Visualizer({ children, className }: VisualizerProps) {
  return (
    <div
      className={cn(
        "bg-grid flex items-center justify-center rounded-md border border-gray7 bg-[url('/images/grid.svg')] p-6",
        className,
      )}
    >
      {children}
    </div>
  )
}
