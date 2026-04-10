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

    // Style variants with specific classes
    // Note: Outline variant uses a very modern "fill" animation where the background expands from empty to solid blue
    const variantClasses = {
      default: "bg-blue-600 text-white shadow-lg shadow-blue-500/30 border border-blue-500 hover:shadow-blue-500/50 hover:-translate-y-0.5",
      outline: "border-2 border-blue-100 bg-transparent text-blue-600 hover:text-white rounded-full hover:border-blue-600",
      ghost: "hover:bg-blue-50 hover:text-blue-600 text-gray-600",
      premium: "bg-gray-900 text-white shadow-xl border border-gray-800 rounded-full hover:-translate-y-0.5",
    };

    return (
      <button
        className={cn(baseClasses, variantClasses[variant], sizeClasses[size], className)}
        ref={ref}
        {...props}
      >
        {/* Fill hover animation for Outline - Overlays the border for a seamless look */}
        {variant === 'outline' && (
           <div className="absolute inset-[-2px] bg-gradient-to-r from-blue-600 to-cyan-500 translate-y-[100%] group-hover:translate-y-0 transition-transform duration-300 ease-[cubic-bezier(0.22,1,0.36,1)] rounded-full -z-10" />
        )}
        
        {/* Glow spread for Premium and Default */}
        {(variant === 'default' || variant === 'premium') && (
          <div className="absolute inset-0 w-full h-full bg-white opacity-0 group-hover:opacity-20 transition-opacity duration-300 ease-out z-0 scale-150 group-hover:scale-100 mix-blend-overlay" />
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
