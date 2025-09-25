import { cn } from "@/lib/utils";
import { ReactNode } from "react";

interface CardProps {
  children: ReactNode;
  className?: string;
  clickable?: boolean;
  onClick?: () => void;
  variant?: "default" | "primary" | "success" | "muted";
}

export function Card({ children, className, clickable, onClick, variant = "default" }: CardProps) {
  const baseClasses = "rounded-lg shadow-custom-sm transition-all duration-200";
  
  const variantClasses = {
    default: "bg-card border border-border hover:shadow-custom-md",
    primary: "bg-primary-light border border-primary/20 hover:shadow-custom-md",
    success: "bg-success-light border border-success/20 hover:shadow-custom-md",
    muted: "bg-muted border border-border hover:bg-card-hover"
  };
  
  const clickableClasses = clickable 
    ? "cursor-pointer hover:shadow-custom-md hover:scale-[1.02] active:scale-[0.98]" 
    : "";

  return (
    <div
      className={cn(
        baseClasses,
        variantClasses[variant],
        clickableClasses,
        className
      )}
      onClick={onClick}
    >
      {children}
    </div>
  );
}