import * as React from "react";
import { cn } from "@/lib/utils";

export interface ButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  variant?: 'default' | 'outline' | 'ghost' | 'premium';
  size?: 'default' | 'sm' | 'lg' | 'icon';
}

const Button = React.forwardRef<HTMLButtonElement, ButtonProps>(
  ({ className, variant = 'default', size = 'default', ...props }, ref) => {
    
    // Base classes
    const baseClasses = "relative inline-flex items-center justify-center rounded-xl font-bold transition-all duration-300 overflow-hidden group focus-visible:outline-none disabled:pointer-events-none disabled:opacity-50";
    
    // Size variants
    const sizeClasses = {
      default: "h-12 px-6 py-2 text-base",
      sm: "h-9 rounded-md px-3 text-sm",
      lg: "h-14 px-8 text-lg rounded-full",
      icon: "h-10 w-10",
    };

    // Style variants
    const variantClasses = {
      default: "bg-blue-600 text-white shadow-lg shadow-blue-500/30 border border-blue-500 hover:shadow-blue-500/50 hover:-translate-y-0.5",
      outline: "border-2 border-blue-200 bg-transparent text-blue-600 hover:text-white rounded-full hover:border-transparent hover:shadow-lg hover:shadow-blue-500/20",
      ghost: "hover:bg-blue-50 hover:text-blue-600 text-gray-600",
      premium: "bg-gray-900 text-white shadow-xl border border-gray-800 rounded-full hover:-translate-y-0.5",
    };

    return (
      <button
        className={cn(baseClasses, variantClasses[variant], sizeClasses[size], className)}
        ref={ref}
        {...props}
      >
        {/* Fill hover for Outline — sits behind content, fills the entire button */}
        {variant === 'outline' && (
           <div className="absolute inset-0 bg-gradient-to-r from-blue-600 to-cyan-500 scale-y-0 group-hover:scale-y-100 transition-transform duration-300 ease-[cubic-bezier(0.22,1,0.36,1)] origin-bottom rounded-[inherit]" />
        )}
        
        {/* Glow spread for Premium and Default */}
        {(variant === 'default' || variant === 'premium') && (
          <div className="absolute inset-0 w-full h-full bg-white opacity-0 group-hover:opacity-20 transition-opacity duration-300 ease-out scale-150 group-hover:scale-100 mix-blend-overlay" />
        )}

        <span className="relative z-10 flex items-center justify-center">
          {props.children}
        </span>
      </button>
    );
  }
);
Button.displayName = "Button";

export { Button };
