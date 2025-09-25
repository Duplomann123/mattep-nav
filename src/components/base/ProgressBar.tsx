import { cn } from "@/lib/utils";

interface ProgressBarProps {
  progress: number; // 0-100
  className?: string;
  variant?: "primary" | "success" | "warning";
  size?: "sm" | "md" | "lg";
  showLabel?: boolean;
}

export function ProgressBar({ 
  progress, 
  className, 
  variant = "primary", 
  size = "md",
  showLabel = false 
}: ProgressBarProps) {
  const clampedProgress = Math.min(100, Math.max(0, progress));
  
  const containerClasses = {
    sm: "h-2",
    md: "h-3",
    lg: "h-4"
  };
  
  const variantClasses = {
    primary: "bg-primary",
    success: "bg-success",
    warning: "bg-warning"
  };

  return (
    <div className={cn("w-full", className)}>
      <div className={cn(
        "bg-muted rounded-full overflow-hidden",
        containerClasses[size]
      )}>
        <div
          className={cn(
            "h-full transition-all duration-500 ease-out rounded-full",
            variantClasses[variant]
          )}
          style={{ width: `${clampedProgress}%` }}
        />
      </div>
      {showLabel && (
        <div className="mt-1 text-sm text-muted-foreground text-right">
          {Math.round(clampedProgress)}%
        </div>
      )}
    </div>
  );
}