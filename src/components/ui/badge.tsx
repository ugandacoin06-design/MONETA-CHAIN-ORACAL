import * as React from "react"
import { cn } from "@/src/lib/utils"

export interface BadgeProps extends React.HTMLAttributes<HTMLDivElement> {
  variant?: 'default' | 'success' | 'warning' | 'danger' | 'outline';
  children?: React.ReactNode;
  className?: string;
}

function Badge({ className, variant = 'default', ...props }: BadgeProps) {
  return (
    <div
      className={cn(
        "inline-flex items-center rounded-full border px-2.5 py-0.5 text-[9px] font-bold uppercase tracking-widest transition-colors focus:outline-none focus:ring-2 focus:ring-cyan-500 focus:ring-offset-2",
        {
          'border-transparent bg-cyan-600/20 text-cyan-400': variant === 'default',
          'border-transparent bg-green-500/20 text-green-400': variant === 'success',
          'border-transparent bg-yellow-500/20 text-yellow-400': variant === 'warning',
          'border-transparent bg-red-500/20 text-red-500': variant === 'danger',
          'text-slate-400 border-slate-700 bg-slate-900/50': variant === 'outline',
        },
        className
      )}
      {...props}
    />
  )
}

export { Badge }
