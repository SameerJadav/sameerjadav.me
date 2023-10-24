import { cn } from "~/lib/utils"

interface VisualizerProps {
  children: React.ReactNode
  className?: string
}

export default function Visualizer({ children, className }: VisualizerProps) {
  return (
    <div
      className={cn(
        "flex items-center justify-center rounded-md border border-gray7 bg-[url('/images/grid.svg')] bg-grid p-6",
        className,
      )}
    >
      {children}
    </div>
  )
}
