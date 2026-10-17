import * as React from "react"
import { cn } from "@/src/lib/utils"

export interface ButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  variant?: 'default' | 'outline' | 'ghost' | 'secondary' | 'danger';
  size?: 'default' | 'sm' | 'lg' | 'icon';
}

const Button = React.forwardRef<HTMLButtonElement, ButtonProps>(
  ({ className, variant = 'default', size = 'default', ...props }, ref) => {
    return (
      <button
        ref={ref}
        className={cn(
          "inline-flex items-center justify-center whitespace-nowrap rounded font-bold uppercase tracking-widest transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-cyan-500 focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50",
          {
            'bg-cyan-600 text-white shadow-[0_0_15px_rgba(6,182,212,0.3)] active:scale-95 hover:bg-cyan-500': variant === 'default',
            'bg-cyan-600/20 border border-cyan-500/50 text-cyan-400 hover:bg-cyan-600/30': variant === 'outline',
            'hover:bg-slate-800 hover:text-white text-slate-400': variant === 'ghost',
            'bg-[#0a0b14] text-white hover:bg-slate-900 border border-slate-800': variant === 'secondary',
            'bg-red-500/20 border border-red-500/50 text-red-500 hover:bg-red-500/30': variant === 'danger',
            'h-10 px-4 py-2 text-xs': size === 'default',
            'h-8 px-3 text-[10px]': size === 'sm',
            'h-11 px-8 text-sm': size === 'lg',
            'h-10 w-10 text-xs': size === 'icon',
          },
          className
        )}
        {...props}
      />
    )
  }
)
Button.displayName = "Button"

export { Button }
