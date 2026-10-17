import * as React from "react"
import { cn } from "@/src/lib/utils"

export interface SelectProps extends React.SelectHTMLAttributes<HTMLSelectElement> {}

const Select = React.forwardRef<HTMLSelectElement, SelectProps>(
  ({ className, ...props }, ref) => {
    return (
      <select
        className={cn(
          "flex h-10 w-full rounded border border-slate-700 bg-slate-900 px-3 py-2 text-xs text-white focus-visible:outline-none focus-visible:border-cyan-500 disabled:cursor-not-allowed disabled:opacity-50 appearance-none outline-none",
          className
        )}
        ref={ref}
        {...props}
      />
    )
  }
)
Select.displayName = "Select"

export { Select }
